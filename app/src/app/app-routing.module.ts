import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';

const routes: Routes = [
  { path: '', redirectTo: '/inscription', pathMatch: 'full' },
  { path: 'connexion', component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'password', component: PasswordForgottenComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
