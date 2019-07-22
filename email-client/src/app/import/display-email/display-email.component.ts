import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserMessage } from '../../user-account';

@Component({
  selector: 'app-display-email',
  templateUrl: './display-email.component.html',
  styleUrls: ['./display-email.component.css']
})
export class DisplayEmailComponent implements OnInit {

  @Input() singleMessage:  UserMessage;
  @Output() visible: EventEmitter<any> = new EventEmitter();

  constructor() { 

  }

  ngOnInit() {
  }

  toggle(){
    this.singleMessage.isNew = false;
    this.visible.emit(null);
  }

}
