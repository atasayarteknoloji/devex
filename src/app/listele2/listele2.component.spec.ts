import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listele2Component } from './listele2.component';

describe('Listele2Component', () => {
  let component: Listele2Component;
  let fixture: ComponentFixture<Listele2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listele2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listele2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
