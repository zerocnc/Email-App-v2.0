import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromFormComponent } from './message-from-form.component';

describe('MessageFromFormComponent', () => {
  let component: MessageFromFormComponent;
  let fixture: ComponentFixture<MessageFromFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFromFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFromFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
