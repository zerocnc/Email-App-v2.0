import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'query-param';

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params => console.log(params));
  }

  OnClick(){
    
  }

  OnClickHome(){
    
  }
}
