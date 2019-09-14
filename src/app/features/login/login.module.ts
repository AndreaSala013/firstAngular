import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormComponent } from './components/form/form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, FormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
