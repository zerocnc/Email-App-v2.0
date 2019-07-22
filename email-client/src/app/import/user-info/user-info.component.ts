import { Component, OnInit, Input } from '@angular/core';
import { UserAccount } from '../../user-account';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() currentUser: UserAccount;

  constructor() {

   }

  ngOnInit( ) {
    console.log("Inside User Info");
    console.log(this.currentUser.userEmail);
  }

}
