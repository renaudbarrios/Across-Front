import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTwitterSideComponent } from './home-page-twitter-side.component';

describe('HomePageTwitterSideComponent', () => {
  let component: HomePageTwitterSideComponent;
  let fixture: ComponentFixture<HomePageTwitterSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTwitterSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTwitterSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
