import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

	signupForm: FormGroup;

  constructor() {
   }

  ngOnInit() {

	this.signupForm = new FormGroup({
		'email': new FormControl('',[
			Validators.required,
			Validators.email
		]),
		'password': new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		]),
		'agreedToTOS': new FormControl(null,[
			Validators.required,
			Validators.requiredTrue
		])
	})
	
	this.signupForm.valueChanges.subscribe(console.log);
	}

	get email(){
		return this.signupForm.get('email');
	}

	get password(){
		return this.signupForm.get('password');
	}

	get agreedToTOS(){
		return this.signupForm.get('agreedToTOS');
	}

	OnSubmit(){
		console.warn(this.signupForm.value);
	}
}
