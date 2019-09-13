import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { PromisesComponent } from './components/promises/promises.component';
import { TestComponent } from './test.component';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { SharedModule } from '../shared/shared.module';
import { ChildComponent } from './components/observables/child/child.component';

@NgModule({
  declarations: [PromisesComponent, TestComponent, ObservableComponent, ChildComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export class TestModule { }
