import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientRoutingModule } from './Patientapp-routing.module';
import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';
import { BaseLogger, LoggerConsole, LoggerEmail } from 'src/common/logger';
import { HttpClientModule } from '@angular/common/http';
import { config } from 'src/common/Common-config';
import { AuthGuard } from 'src/common/common-authGuard';
import { AuthService } from 'src/app/auth-service.service';



@NgModule({
  declarations: [
    PatientComponent,
  ],
  imports: [
    PatientRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, config,
    { provide: BaseLogger, useClass: LoggerConsole },

  ],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
