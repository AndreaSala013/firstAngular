import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzioneComponent } from './pages/azione/azione.component';
import { CommediaComponent } from './pages/commedia/commedia.component';
import { AvventuraComponent } from './pages/avventura/avventura.component';
import { CategorieComponent } from './pages/categorie/categorie.component';

const routes: Routes = [
  {path:'', component:CategorieComponent, children:[
    {path:'', redirectTo:'azione',pathMatch:'full'},
    {path:'azione', component:AzioneComponent},
    {path:'commedia', component:CommediaComponent},
    {path:'avventura', component:AvventuraComponent}
  ]},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
