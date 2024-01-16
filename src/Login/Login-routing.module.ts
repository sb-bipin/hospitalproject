import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login.componentLogin';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'Check', component: LoginFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule,
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
