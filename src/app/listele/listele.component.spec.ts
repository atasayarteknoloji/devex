import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeleComponent } from './listele.component';

describe('ListeleComponent', () => {
  let component: ListeleComponent;
  let fixture: ComponentFixture<ListeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
