import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { DashboardComponent } from './pages/inside/dashboard/dashboard.component';
import { SidebarComponent } from './pages/inside/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListsurveyComponent } from './pages/inside/listsurvey/listsurvey.component';
import { HomeComponent } from './pages/inside/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SurveyComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ListsurveyComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-CO' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
