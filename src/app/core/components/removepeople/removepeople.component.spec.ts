import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovepeopleComponent } from './removepeople.component';

describe('RemovepeopleComponent', () => {
  let component: RemovepeopleComponent;
  let fixture: ComponentFixture<RemovepeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovepeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovepeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
