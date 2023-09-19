import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { TestComponent } from './test/test.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    TestComponent,
    RecomendacionesComponent

  ], 
  exports:[
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    TestComponent,
    RecomendacionesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ]
})
export class UserModule { }