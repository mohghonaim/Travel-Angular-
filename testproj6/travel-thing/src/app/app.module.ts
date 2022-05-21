import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { TempComponent } from './temp/temp.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LocPageComponent } from './loc-page/loc-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { DahabLocPageComponent } from './dahab-loc-page/dahab-loc-page.component';
import { SharmElSheikhLocPageComponent } from './sharm-el-sheikh-loc-page/sharm-el-sheikh-loc-page.component';
import { DahabService } from './dahab.service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckbox, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { InterestedComponent } from './interested/interested.component';
import { EventSignupComponent } from './event-signup/event-signup.component';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TempComponent,
    CarouselComponent,
    NavbarComponent,
    routingComponents,
    DahabLocPageComponent,
    SharmElSheikhLocPageComponent,
    DialogComponent,
    InterestedComponent,
    EventSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, NoopAnimationsModule, 
    MatTableModule, MatFormFieldModule, MatButtonModule, MatPseudoCheckboxModule, 
    MatDialogModule, FormsModule
  ],
  providers: [DahabService, AuthService, AuthGuard],
  bootstrap: [AppComponent, MapComponent, TempComponent, CarouselComponent, NavbarComponent,
    HomepageComponent, LoginComponent, SignupComponent, LocPageComponent, 
    EventPageComponent, DahabLocPageComponent, SharmElSheikhLocPageComponent, 
    DialogComponent, InterestedComponent, EventSignupComponent
  
  ], entryComponents: [DialogComponent]
})
export class AppModule { }
