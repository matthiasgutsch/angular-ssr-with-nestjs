import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {SeoService} from "../../../services/seo.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss', '../users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  showSpinner = true;
  userId;
  user: any;

  isErr = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('slug');

    if (this.userId) {
      this.getUser();
    }
  }

  getUser() {
    this.user = this.userService.getUser(this.userId).subscribe((res) => {
      this.user = res[0];
        this.seoService.updateTitle(this.user.title.rendered + '');
        this.showSpinner = false;
      });

    };
  }