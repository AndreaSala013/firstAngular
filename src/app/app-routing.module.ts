import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './features/categorie/pages/categorie/categorie.component';


const routes: Routes = [
  {path:'', redirectTo:'popolari',pathMatch:'full'},
  {path:'popolari', loadChildren:'./features/popolari/popolari.module#PopolariModule'},
  {path:'categorie', loadChildren:'./features/categorie/categorie.module#CategorieModule'},
  {path:'contatti', loadChildren:'./features/contatti/contatti.module#ContattiModule'},
  {path:'login', loadChildren:'./features/login/login.module#LoginModule'},
  {path:'test', loadChildren:'./test/test.module#TestModule'},
  {path:'**', redirectTo:'popolari'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
