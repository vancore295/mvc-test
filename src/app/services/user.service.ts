import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  private baseUrl = '/api/users';
  private urls = {
    get: this.baseUrl + 'get',
    post: this.baseUrl + 'post'
  };

  constructor(private http: Http) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.urls.get).map(res => res.json());
  }

  saveUser(user: any) {
    return this.http.post(this.urls.post, user).map(res => res.json());
  }

}
