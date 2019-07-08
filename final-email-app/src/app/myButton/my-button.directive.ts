import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyButton]'
})
export class MyButtonDirective implements OnInit {

	constructor(private renderer: Renderer2, private el: ElementRef) { }

	ngOnInit(){
		this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F3FFBF');
	}
	  
	@HostListener('mouseenter') performTask(){
		this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FFAFA6');
		this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
		this.renderer.setStyle(this.el.nativeElement, 'transition', '0.5s');
		this.renderer.setStyle(this.el.nativeElement, 'border', 'double');

	}

	@HostListener('mouseleave') leaveButton(){
		this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F3FFBF');
		this.renderer.setStyle(this.el.nativeElement, 'border-radius', '0');
		this.renderer.setStyle(this.el.nativeElement, 'border', 'dash');
		this.renderer.setStyle(this.el.nativeElement, 'transition', '0.5s');
	}

}
