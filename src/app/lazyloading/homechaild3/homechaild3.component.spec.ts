import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechaild3Component } from './homechaild3.component';

describe('Homechaild3Component', () => {
  let component: Homechaild3Component;
  let fixture: ComponentFixture<Homechaild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homechaild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homechaild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
