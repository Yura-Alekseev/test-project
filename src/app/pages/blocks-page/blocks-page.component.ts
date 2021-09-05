import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.scss']
})
export class BlocksPageComponent implements OnInit {
  usersData: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchInputChanged(data: any): void {
    this.usersData = data;
  }
}
