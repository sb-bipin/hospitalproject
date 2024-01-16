import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Homeapp.componentHome';
import { AuthGuard } from 'src/common/common-authGuard';
// import { LoginFormComponent } from '../Login/Login.componentLogin';


const routes: Routes = [
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'Patient', loadChildren: () =>
      import('../PatientApp/Patientapp.module').then(m => m.PatientModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Login', loadChildren: () =>
      import('../Login/Login.module').then(n => n.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
