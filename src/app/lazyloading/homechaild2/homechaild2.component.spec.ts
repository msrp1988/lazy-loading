import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechaild2Component } from './homechaild2.component';

describe('Homechaild2Component', () => {
  let component: Homechaild2Component;
  let fixture: ComponentFixture<Homechaild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homechaild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homechaild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
