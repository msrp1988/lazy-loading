import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechaild1Component } from './homechaild1.component';

describe('Homechaild1Component', () => {
  let component: Homechaild1Component;
  let fixture: ComponentFixture<Homechaild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homechaild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homechaild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
