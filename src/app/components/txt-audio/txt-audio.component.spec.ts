import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtAudioComponent } from './txt-audio.component';

describe('TxtAudioComponent', () => {
  let component: TxtAudioComponent;
  let fixture: ComponentFixture<TxtAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
