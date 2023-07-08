import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { DashboardComponent } from './pages/inside/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListsurveyComponent } from './pages/inside/listsurvey/listsurvey.component';
import { HomeComponent } from './pages/inside/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent, pathMatch: 'full' },
  { path: 'signup', component:SignupComponent, pathMatch: 'full' },
  { path: 'inside', component:DashboardComponent,
    children:[
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'survey', component:SurveyComponent },
      { path: 'list-survey', component: ListsurveyComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
