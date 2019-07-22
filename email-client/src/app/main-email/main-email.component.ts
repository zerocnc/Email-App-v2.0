import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../user-account';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {

  displayFlag: boolean;
	selectedIndex: number = null;

	currentUser: UserAccount =  {
		userEmail: "Caitlyn@riot.lol.net",
		userImageSrc: "./assets/Caitlyn.png",
		userName: "Caitlyn",
			userMessages: [ {
				emailFrom: "Vi",
				emailSubject: "TO many deaths!",
				emailMesage: "Please stop init!",
				emailDateTime: "09:49 am",
				isNew: true,
				isMessage:true,
				isDraft: false,
				hasBeenSent: false,
				isSpam: false,
				isTrash: false
			},
			{
				emailFrom: "Teemo",
				emailSubject: "Stop drop land mines please",
				emailMesage: "Size doesn't mean everything!",
				emailDateTime: "08:49 am",
				isNew: false,
				isMessage:true,
				isDraft: false,
				hasBeenSent: false,
				isSpam: false,
				isTrash: false
			},
			{
				emailFrom: "Gauren",
				emailSubject: "Demacia!",
				emailMesage: "Demacia Demacia! Demacia is a strong, lawful society with a prestigious military history. It values the ideals of justice, honor and duty highly, and its people are fiercely proud.",
				emailDateTime: "08:49 am",
				isNew: true,
				isMessage:true,
				isDraft: false,
				hasBeenSent: false,
				isSpam: false,
				isTrash: false
			},{
				emailFrom: "Gauren",
				emailSubject: "Again: Demacia!",
				emailMesage: "Demacia Demacia! Demacia is a strong, lawful society with a prestigious military history. It values the ideals of justice, honor and duty highly, and its people are fiercely proud.",
				emailDateTime: "11:49 am",
				isNew: true,
				isMessage:true,
				isDraft: false,
				hasBeenSent: false,
				isSpam: false,
				isTrash: false
			},{
				emailFrom: "Ezreal",
				emailSubject: "Guess what",
				emailMesage: "You belong in a museum!",
				emailDateTime: "12:49 am",
				isNew: true,
				isMessage:true,
				isDraft: false,
				hasBeenSent: false,
				isSpam: false,
				isTrash: false
			}]
	}

  	recieveMessage($event, i){
		this.displayFlag = $event;
		this.currentUser.userMessages[i].isNew = false;
	}

	setRow(_index: number){
		this.selectedIndex = _index;
	}

	constructor() { }

	ngOnInit() {
	}

}
