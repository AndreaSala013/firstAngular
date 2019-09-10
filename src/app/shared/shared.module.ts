import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitoloComponent } from './titolo/titolo.component';
import { ListaCardComponent } from './lista-card/lista-card.component';
import { CardComponent } from './card/card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RaitingsComponent } from './raitings/raitings.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    TitoloComponent,
    ListaCardComponent,
    CardComponent,
    RaitingsComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports:[
    TitoloComponent,
    ListaCardComponent,
    CardComponent,
    RaitingsComponent,
    StarComponent
  ]
})
export class SharedModule { }
