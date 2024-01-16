// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginFormComponent } from './Login.componentLogin';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { config } from 'src/common/Common-config';
import { AuthService } from 'src/app/auth-service.service';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule,
    LoginRoutingModule],
  providers: [config, AuthService],
  bootstrap: [LoginFormComponent]

})
export class LoginModule { }


