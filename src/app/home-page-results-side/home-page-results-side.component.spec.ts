import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageResultsSideComponent } from './home-page-results-side.component';

describe('HomePageResultsSideComponent', () => {
  let component: HomePageResultsSideComponent;
  let fixture: ComponentFixture<HomePageResultsSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageResultsSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageResultsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
