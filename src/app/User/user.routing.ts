import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';

const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'inicio',component:InicioComponent},
    {path: 'test',component: TestComponent},
    {path: 'recomendaciones',component:RecomendacionesComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{ 
  
} 