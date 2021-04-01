import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { HomePAgeComponent } from './home-page/home-page.component';
import { RankingsComponent } from './rankings/rankings.component';
import { HomePageTwitchSideComponent } from './home-page-twitch-side/home-page-twitch-side.component';
import { HomePageTwitterSideComponent } from './home-page-twitter-side/home-page-twitter-side.component';
import { HomePageResultsSideComponent } from './home-page-results-side/home-page-results-side.component';
import { TwitterComponent } from './twitter/twitter.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HomePAgeComponent,
    RankingsComponent,
    HomePageTwitchSideComponent,
    HomePageTwitterSideComponent,
    HomePageResultsSideComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
