import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { PromisesComponent } from './components/promises/promises.component';
import { TestComponent } from './test.component';
import { ObservableComponent } from './components/observables/observable/observable.component';

@NgModule({
  declarations: [PromisesComponent, TestComponent, ObservableComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
