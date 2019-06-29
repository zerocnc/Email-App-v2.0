import { Component, OnInit, Input } from '@angular/core';

import { Book } from './book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent implements OnInit {

	tempBook: Book = {
	cTitle: "Title", cAuthor: "Author", cDate: "5/29/40"
	};

	DataBase: Array<Book> = new Array<Book>();
	@Input() uTitle: string = "Enter Title";
	@Input() uAuthor: string = "Enter Author";
	@Input() uDate: string = "Enter Date";

	constructor() {

	}

	ngOnInit() {

	}

	addBook(): void {
	let i = new Book(this.uTitle, this.uAuthor, this.uDate);
	this.DataBase.push(i);

	this.uTitle = "Enter Title";
	this.uAuthor = "Enter Author";
	this.uDate = "Enter Date";

	console.log(Object(this.DataBase));

	}

}
