import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContattiPageComponent } from './pages/contatti-page/contatti-page.component';

const routes: Routes = [
  {path:'', component:ContattiPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattiRoutingModule { }
