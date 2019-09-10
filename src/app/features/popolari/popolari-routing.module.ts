import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopolariPageComponent } from './pages/popolari-page/popolari-page.component';

const routes: Routes = [
  {path:'', component:PopolariPageComponent,pathMatch:'full'}
  /*{path:'', redirectTo:'popolari',pathMatch:'full'},
  {path:'popolari', component: PopolariPageComponent},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopolariRoutingModule { }
