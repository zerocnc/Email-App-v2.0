import { Component, OnInit, Input } from '@angular/core';

import { UserAccount } from '../user-account';

@Component({
  selector: 'app-user-folders',
  templateUrl: './user-folders.component.html',
  styleUrls: ['./user-folders.component.css']
})
export class UserFoldersComponent implements OnInit {

  @Input() currentUser: UserAccount;

  constructor() { }

  ngOnInit() {
  }

}