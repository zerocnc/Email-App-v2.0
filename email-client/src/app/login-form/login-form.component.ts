import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	loginForm: FormGroup;
	
	// For email matching: Offical -> https://www.regular-expressions.info/email.html
	// emailPattern:string = "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b";

	constructor(private fb: FormBuilder){
		// this.loginForm = this.fb.group({
		// 	email: this.email,
		// 	password: this.password,
		// 	rememberMe: this.rememberMe
		// });
	}

	ngOnInit(){
		this.loginForm = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email
			]),
			'password': new FormControl('',[
				Validators.required,
				Validators.minLength(8)
				]),
			'rememberMe': new FormControl(null)
		})

		this.loginForm.valueChanges.subscribe(console.log);
	}

	get email(){
		return this.loginForm.get('email');
	}

	get password(){
		return this.loginForm.get('password');
	}

	get rememberMe(){
		return this.loginForm.get('rememberMe');
	}

	onSubmit(){
		console.warn(this.loginForm.value);
	}

}
