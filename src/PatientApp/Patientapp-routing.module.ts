import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './Patientapp.componentPatient';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'Add', component: PatientComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule,
  ],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
