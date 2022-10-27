import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StashComponent } from './stash/stash.component';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabaseModule } from '@angular/fire/database';

@NgModule({
 declarations: [
   AppComponent,
   HomeComponent,
   StashComponent,
 ],
 imports: [
    RouterModule,
   BrowserModule,
   DatabaseModule,
 ],
 providers: [],
 bootstrap: [AppComponent],
 exports: [  AppComponent,
  HomeComponent,
  StashComponent,]
})
export class AppModule { }
