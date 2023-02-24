import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  showSpinner = true;
  newsList: any = [];
  isErr = false;
  lang = 'it';

  constructor(
    private userService: UserService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Users - Angular SSR');
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((pData) => {
      this.newsList = pData;
    });


  }

}
