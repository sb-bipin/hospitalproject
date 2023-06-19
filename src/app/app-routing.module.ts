import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './app.componentPatient';
import { HomeComponent } from './app.componentHome';

const routes: Routes = [
  { path: 'Patient', component: PatientComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
