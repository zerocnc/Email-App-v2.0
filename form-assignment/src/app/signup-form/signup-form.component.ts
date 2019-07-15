import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

	signUpForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.signUpForm = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email]),
			'password': new FormControl('', [
					Validators.required,
					Validators.minLength(8)
				])
		})

		this.signUpForm.valueChanges.subscribe(console.log);
	}

	get email(){
		return this.signUpForm.get('email');
	}

	get password(){
		return this.password.get('password');
	}

	onSubmit(){
		console.log(this.signUpForm);
	}

}
