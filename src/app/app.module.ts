import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//add additional imports below here

import { SearchComponent } from './search/search.component';
import { StashComponent } from './stash/stash.component';
import { StashFormComponent } from './stash/stash-form.component';

//Firebase
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';

import { DatabaseModule } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule,
  //add additional imports below here
  DatabaseModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
   provideAuth(() => getAuth()),
   provideFirestore(() => getFirestore()),
NgbModule,
  ],
  declarations: [ AppComponent, HomeComponent,
  // add additional declarations below
    SearchComponent, StashComponent, StashFormComponent,

  ],
  bootstrap:    [ AppComponent ]
})



//start again

// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';


// import { HomeComponent } from './home/home.component';
// import { StashComponent } from './stash/stash.component';


// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { environment } from 'src/environments/environment';
// import { FormsModule } from '@angular/forms';

// import { DatabaseModule } from '@angular/fire/database';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { SearchComponent } from './search/search.component';




// @NgModule({
//  declarations: [
//    AppComponent,
//    HomeComponent,
  //  StashComponent,
  //     SearchComponent
  //  ],
//  imports: [
//   imports:      [ BrowserModule, FormsModule ],


  //   RouterModule,
  //  BrowserModule,
  //  DatabaseModule,

  //  FormsModule,
  //  NgbModule,
  //  provideFirebaseApp(() => initializeApp(environment.firebase)),
  //  provideAuth(() => getAuth()),
  //  provideFirestore(() => getFirestore()),

//  ],
//  providers: [],
//  bootstrap: [AppComponent],
//  exports: [  AppComponent,
//   HomeComponent,
//   StashComponent,]
// })
export class AppModule { }
