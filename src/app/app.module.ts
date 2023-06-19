import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PatientComponent } from './app.componentPatient';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './app.componentMasterPage';
import { HomeComponent } from './app.componentHome';

@NgModule({
  declarations: [
    PatientComponent,
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
