import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: 'signin', component: ConnectionComponent },
  { path: 'signup', component: InscriptionComponent },
  { path: '', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
