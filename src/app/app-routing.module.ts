import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePAgeComponent } from './home-page/home-page.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  {path:'', component:HomePAgeComponent},
  {path:'rankings', component:RankingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
