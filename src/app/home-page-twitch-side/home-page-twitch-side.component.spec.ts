import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTwitchSideComponent } from './home-page-twitch-side.component';

describe('HomePageTwitchSideComponent', () => {
  let component: HomePageTwitchSideComponent;
  let fixture: ComponentFixture<HomePageTwitchSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTwitchSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTwitchSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
