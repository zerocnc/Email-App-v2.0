import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputText]'
})
export class InputTextDirective {

	@HostListener('mouseenter') performTask(){
		this.renderer.setStyle( this.el.nativeElement, "color", "white");
		// this.renderer.setStyle( this.el.nativeElement, "background-color", "red");
		this.renderer.setStyle( this.el.nativeElement, "background-image", "linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%)");
		this.renderer.setStyle( this.el.nativeElement, "border", "3px solid orange")
		this.renderer.setStyle(this.el.nativeElement, 'transition', '2s');
	}

	@HostListener('onhover') onHover(){
		this.renderer.setStyle( this.el.nativeElement, "color", "grey");
		this.renderer.setStyle( this.el.nativeElement, "border", "1px solid pink");
		this.renderer.setStyle( this.el.nativeElement, " background-position", "right center");
		this.renderer.setStyle(this.el.nativeElement, 'transition', '2s');
	}

	@HostListener('focusout') outFocus(){
		this.renderer.setStyle( this.el.nativeElement, "color", "black");
		this.renderer.setStyle( this.el.nativeElement, "border", "1px solid red")
		this.renderer.setStyle( this.el.nativeElement, " background-position", "right center")
		this.renderer.setStyle(this.el.nativeElement, 'transition', '2s');
	}

	// @HostListener('mouseleave') offFocus(){
	// 	this.renderer.setStyle( this.el.nativeElement, "border", "1px solid green");
	// 	this.renderer.setStyle( this.el.nativeElement, "color", "white");
	// 	this.renderer.setStyle( this.el.nativeElement, "background-color", "white");
	// 	this.renderer.setStyle(this.el.nativeElement, 'transition', '0.5s');
	// }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }



}
