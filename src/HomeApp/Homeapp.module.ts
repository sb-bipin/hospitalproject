import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './Homeapp-routing.module';
import { MasterPageComponent } from './Homeapp.componentMasterPage';
import { HomeComponent } from './Homeapp.componentHome';
import { BaseLogger, LoggerConsole, LoggerEmail } from 'src/common/logger';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule
  ],
  providers: [{
    provide: BaseLogger, useClass: LoggerConsole
  }],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
