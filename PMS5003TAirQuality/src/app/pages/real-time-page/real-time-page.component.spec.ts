import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimePageComponent } from './real-time-page.component.ts';

describe('RealTimePageComponent', () => {
  let component: RealTimePageComponent;
  let fixture: ComponentFixture<RealTimePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
