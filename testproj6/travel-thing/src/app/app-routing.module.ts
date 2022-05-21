import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { EventPageComponent } from './event-page/event-page.component';
import { LocPageComponent } from './loc-page/loc-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DahabLocPageComponent } from './dahab-loc-page/dahab-loc-page.component';
import { SharmElSheikhLocPageComponent } from './sharm-el-sheikh-loc-page/sharm-el-sheikh-loc-page.component';
import { EventSignupComponent } from './event-signup/event-signup.component';
import { AuthGuard } from './auth.guard';

// home should be index?

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomepageComponent },
  { path: 'event', component: EventPageComponent },
  { path: 'loc', component: LocPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dahab', component: DahabLocPageComponent },
  { path: 'shrmsheikh', component: SharmElSheikhLocPageComponent },
  { path: 'loc/:id', component: LocPageComponent },
  { path: 'event/:id', component: EventPageComponent },
  { path: 'eventsignup', component: EventSignupComponent, canActivate: [AuthGuard]},
  { path: 'eventsignup/:id', component: EventSignupComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomepageComponent, EventPageComponent, LocPageComponent, LoginComponent, SignupComponent,
DahabLocPageComponent, SharmElSheikhLocPageComponent, EventSignupComponent]