import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';

//moduli
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TestModule } from './test/test.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
