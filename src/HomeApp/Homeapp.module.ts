import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './Homeapp-routing.module';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';
import { BaseLogger, LoggerConsole, LoggerEmail } from 'src/common/logger';
import { config } from 'src/common/Common-config';
import { AuthService } from 'src/app/auth-service.service';
import { AuthGuard } from 'src/common/common-authGuard';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule
  ],

  providers: [config, AuthService, AuthGuard],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
