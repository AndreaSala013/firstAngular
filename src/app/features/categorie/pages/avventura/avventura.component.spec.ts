import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvventuraComponent } from './avventura.component';

describe('AvventuraComponent', () => {
  let component: AvventuraComponent;
  let fixture: ComponentFixture<AvventuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvventuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
