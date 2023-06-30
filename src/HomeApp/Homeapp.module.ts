import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './Homeapp-routing.module';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
