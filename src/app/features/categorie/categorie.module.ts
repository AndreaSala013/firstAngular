import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { AvventuraComponent } from './pages/avventura/avventura.component';
import { CommediaComponent } from './pages/commedia/commedia.component';
import { AzioneComponent } from './pages/azione/azione.component';
import { NavbarPopolariComponent } from './components/navbar-popolari/navbar-popolari.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategorieComponent,
    AzioneComponent,
    CommediaComponent,
    AvventuraComponent,
    NavbarPopolariComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    SharedModule
  ]
})
export class CategorieModule { }
