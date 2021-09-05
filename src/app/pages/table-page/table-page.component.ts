import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  usersData: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSearchInputChanged(data: any): void {
    this.usersData = data;
  }
}
