import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PatientRoutingModule } from './Patientapp-routing.module';
import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PatientComponent

  ],
  imports: [
    PatientRoutingModule,
    FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
