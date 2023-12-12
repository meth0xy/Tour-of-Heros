import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent, title: 'Heroes'},
  {path: 'dashboard', component: DashboardComponent, title: 'Dashboard'},
  {path: 'detail/:id', component: HeroDetailsComponent, title: 'Details'}
];
