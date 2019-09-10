import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitoloComponent } from './titolo/titolo.component';
import { ListaCardComponent } from './lista-card/lista-card.component';
import { CardComponent } from './card/card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RaitingsComponent } from './raitings/raitings.component';
import { StarComponent } from './star/star.component';
import { CustomListItemComponent } from './custom-list-item/custom-list-item.component';

@NgModule({
  declarations: [
    TitoloComponent,
    ListaCardComponent,
    CardComponent,
    RaitingsComponent,
    StarComponent,
    ListaCardComponent,
    CustomListItemComponent
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
    StarComponent,
    CustomListItemComponent
  ]
})
export class SharedModule { }
