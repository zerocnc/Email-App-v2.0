export class UserMessage{
     emailFrom: string;
     emailSubject: string;
     emailMesage: string;
     emailDateTime: string;

     isNew: boolean;
     isMessage: boolean;
     isDraft: boolean;
     hasBeenSent: boolean;
     isSpam: boolean;
     isTrash: boolean;

     constructor(){
          this.emailFrom = "";
          this.emailSubject = "";
          this.emailMesage = "";
          this.emailDateTime = "";

          this.isNew = false;
          this.isMessage;
          this.isDraft = false;
          this.hasBeenSent = false;
          this.isSpam = false;
          this.isTrash = false;
     }
}

export class UserAccount {
     userName: string;
     userEmail: string;

     userImageSrc: string;

     userMessages: Array<UserMessage> = new Array<UserMessage>();


     constructor(){
          this.userName = "";
          this.userEmail = "";

          this.userImageSrc = "./src/common/Caitlyn.jpg";
     }

}
