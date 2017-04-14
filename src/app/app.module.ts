import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { SignUpModule } from './signup/signup.module';
import { BookingHomeModule } from './bookHome/bookHome.module';


//firebase
import * as firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyA2qD4zLXKxEpv0SDc12uhS06jDAG6LfA8",
    authDomain: "pickmyride-9f86d.firebaseapp.com",
    databaseURL: "https://pickmyride-9f86d.firebaseio.com",
    projectId: "pickmyride-9f86d",
    storageBucket: "pickmyride-9f86d.appspot.com",
    messagingSenderId: "182620832354"
  };
  firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule,
    SharedModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRs8dJH8luo1qJLnK9XdoAFPzB-ZksGN4 '
    }),
    SignUpModule,
    BookingHomeModule
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
