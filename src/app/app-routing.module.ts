import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
    {path:'popolari', loadChildren:'./features/popolari/popolari.module#PopolariModule'},
    {path:'categorie', loadChildren:'./features/categorie/categorie.module#CategorieModule'},
    {path:'contatti', loadChildren:'./features/contatti/contatti.module#ContattiModule'},
  ]},
  {path:'login', loadChildren:'./features/login/login.module#LoginModule'},
  {path:'test', loadChildren:'./test/test.module#TestModule'},
  {path:'**', redirectTo:'popolari'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
