import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './User/user.routing';
import { PageNotFoundComponent } from './Page404/page-not-found/page-not-found.component';

const routes: Routes = [
  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  UserRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
