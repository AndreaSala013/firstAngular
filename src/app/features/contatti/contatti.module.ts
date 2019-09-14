import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiPageComponent } from './pages/contatti-page/contatti-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/components/form/form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    ContattiPageComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContattiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    ReactiveFormsModule
  ]
})
export class ContattiModule { }
