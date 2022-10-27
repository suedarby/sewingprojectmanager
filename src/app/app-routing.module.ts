import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StashComponent } from './stash/stash.component';
import { StashFormComponent } from './stash/stash-form/stash-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'stash', component: StashComponent},
  { path: 'stashform', component: StashFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
