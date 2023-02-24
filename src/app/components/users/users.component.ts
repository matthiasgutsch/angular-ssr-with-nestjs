import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {SeoService} from "../../services/seo.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  showSpinner = true;
  users: any = [];
  isErr = false;

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
      this.users = pData;
    });


  }

}
