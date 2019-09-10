import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiPageComponent } from './pages/contatti-page/contatti-page.component';

@NgModule({
  declarations: [
    ContattiPageComponent
  ],
  imports: [
    CommonModule,
    ContattiRoutingModule
  ]
})
export class ContattiModule { }
