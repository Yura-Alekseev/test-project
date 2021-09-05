import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from '../../core/services/github.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit, OnDestroy {
  userData: any;

  sub = new Subscription();

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.login) {
        this.sub.add(this.githubService.getUserInfo(params.login).subscribe((data) => {
          this.userData = data;
        }));
      } else {
        this.router.navigate(['/blocks']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
