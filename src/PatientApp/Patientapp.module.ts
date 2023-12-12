import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './Patientapp-routing.module';
import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';
import { BaseLogger, LoggerConsole, LoggerEmail } from 'src/common/logger';

@NgModule({
  declarations: [
    PatientComponent,
  ],
  imports: [
    PatientRoutingModule,
    FormsModule, CommonModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: BaseLogger, useClass: LoggerConsole
    }
  ],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
