import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('apiUrl') private apiUrl,
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getUser(id) {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

}
