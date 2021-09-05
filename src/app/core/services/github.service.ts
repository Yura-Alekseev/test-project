import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserInfo(user: string): any {
    return this.httpClient.get<any>(`https://api.github.com/users/${user}`);
  }

  getUsers(query: string): any {
    return this.httpClient.get<any>(`https://api.github.com/search/users?q=${query}&per_page=20`);
  }
}
