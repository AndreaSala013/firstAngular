import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzioneComponent } from './azione.component';

describe('AzioneComponent', () => {
  let component: AzioneComponent;
  let fixture: ComponentFixture<AzioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
