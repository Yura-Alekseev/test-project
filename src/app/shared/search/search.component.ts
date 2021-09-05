import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {GithubService} from '../../core/services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() searchInputChanged = new EventEmitter<any>();

  searchInput = new FormControl('');

  sub = new Subscription();

  constructor(
    private githubService: GithubService,
  ) {
  }

  ngOnInit(): void {
    this.sub.add(this.searchInput.valueChanges
      .pipe(
      debounceTime(800))
      .subscribe(() => {
        this.onSearchChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSearchChanges(): void {
    const queryStr = this.searchInput.value.trim();
    this.githubService.getUsers(queryStr).subscribe((data) => {

      this.searchInputChanged.emit(data.items);
    });
  }
}
