import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFormComponent } from './movies-form.component';

describe('MoviesFormComponent', () => {
  let component: MoviesFormComponent;
  let fixture: ComponentFixture<MoviesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
