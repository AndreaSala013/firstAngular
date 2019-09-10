import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [
  {path:'', component: TestComponent,pathMatch:'full'}
  /*{path:'', redirectTo:'test',pathMatch:'full'},
  {path:'test', component: PromisesComponent},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
