import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiPageComponent } from './pages/contatti-page/contatti-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContattiPageComponent
  ],
  imports: [
    CommonModule,
    ContattiRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContattiModule { }
