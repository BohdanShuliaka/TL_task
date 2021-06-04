import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesPaths } from './app-routing.config';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {
    path: RoutesPaths.home,
    component: LandingComponent,
  },
  {
    path: '',
    redirectTo: RoutesPaths.home,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
