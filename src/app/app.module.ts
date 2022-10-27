import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StashComponent } from './stash/stash.component';

// import { FirebaseAppModule } from '@angular/fire/app';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
@NgModule({
 declarations: [
   AppComponent,
   HomeComponent,
   StashComponent,
 ],
 imports: [
  AppModule,
  // HomeComponent,
  // StashComponent,
   BrowserModule,
  //  FirebaseAppModule.initializeApp(environment.firebaseConfig),
   DatabaseModule,
  //  RouterModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
