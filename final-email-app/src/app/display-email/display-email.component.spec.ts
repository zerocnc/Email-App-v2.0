import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmailComponent } from './display-email.component';

describe('DisplayEmailComponent', () => {
  let component: DisplayEmailComponent;
  let fixture: ComponentFixture<DisplayEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
