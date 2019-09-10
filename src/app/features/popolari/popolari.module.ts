import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopolariRoutingModule } from './popolari-routing.module';
import { PopolariPageComponent } from './pages/popolari-page/popolari-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilmService } from './services/film.service';

@NgModule({
  declarations: [
    PopolariPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PopolariRoutingModule
  ],
  providers:[
    FilmService
  ]
})
export class PopolariModule { }
