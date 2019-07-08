import { InputTextDirective } from './input-text.directive';
import { Renderer2 } from '@angular/core';

describe('InputTextDirective', () => {
  it('should create an instance', () => {
    const directive = new InputTextDirective(this.renderer, this.el);
    expect(directive).toBeTruthy();
  });
});
