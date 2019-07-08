import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyBadge]'
})

export class MyBadgeDirective implements OnInit{

	@Input() userColor: string;

	constructor(private renderer: Renderer2, private el: ElementRef) {
	}

	ngOnInit(){

		this.renderer.setStyle(this.el.nativeElement, "position", "absolute");
		this.renderer.setStyle(this.el.nativeElement, "text-align", "center");
		this.renderer.setStyle(this.el.nativeElement, "display", "inline-block");
		this.renderer.setStyle(this.el.nativeElement, "border-radius", "50%");
		this.renderer.setStyle(this.el.nativeElement, "overflow", "hidden");
		this.renderer.setStyle(this.el.nativeElement, "white-space", "nowrap");
		this.renderer.setStyle(this.el.nativeElement, "text-overflow", "ellipsis");
		this.renderer.setStyle(this.el.nativeElement, "pointer-events", "none");
		this.renderer.setStyle(this.el.nativeElement, "background-color", this.userColor);
		this.renderer.setStyle(this.el.nativeElement, "box-sizing", "border-box");
		this.renderer.setStyle(this.el.nativeElement, "font-weight", "300");
		this.renderer.setStyle(this.el.nativeElement, "font-size", "10px");
		this.renderer.setStyle(this.el.nativeElement, "font-family", 'Roboto, "Helvetica Neve", sans-serif');
		this.renderer.setStyle(this.el.nativeElement, "color", '#fff');
		this.renderer.setStyle(this.el.nativeElement, "width", '15px');
		this.renderer.setStyle(this.el.nativeElement, "height", '15px');
		this.renderer.setStyle(this.el.nativeElement, "position", '-7px');
		this.renderer.setStyle(this.el.nativeElement, "line-height", '15px');
		
	}

}
