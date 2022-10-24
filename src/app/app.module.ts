// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { environment } from 'src/environments/environment.prod';


// import { HomeComponent } from './home/home.component';
// import { StashComponent } from './stash/stash.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideStorage,getStorage } from '@angular/fire/storage';



// @NgModule({
//   declarations: [
//     AppComponent,
//       HomeComponent,
//       StashComponent
//    ],
//   imports: [
//     BrowserModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireDatabaseModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { FireModule } from '@angular/fire';
import { DatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
import { RouterModule } from '@angular/router';
@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
  //  FireModule.initializeApp(environment.firebaseConfig),
   DatabaseModule,
   RouterModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
