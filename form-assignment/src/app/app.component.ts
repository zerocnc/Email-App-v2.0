import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'form-assignment';

	signUpForm: FormGroup;

	ngOnInit(){
	
		this.signUpForm = new FormGroup({
			'userName': new FormControl(null, Validators.required),
			'userEmail': new FormControl(null, Validators.required)
		});

		this.signUpForm.statusChanges.subscribe(
			(status) => console.log(status)
		);

		// Update/patch form values
		this.signUpForm.patchValue({
			'userName': 'name',
			'userEmail': 'email'
		});
	}

	onSubmit() {
		console.log(this.signUpForm);
		console.log(this.signUpForm.value);
	  }
	
	  onReset() {
		this.signUpForm.reset();
	}
}

