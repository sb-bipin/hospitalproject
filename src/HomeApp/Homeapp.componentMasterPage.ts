import { Component } from '@angular/core';
// import { Patient } from './Patientapp/Patientapp.model';
import { BaseLogger, LoggerEmail } from 'src/common/logger';


@Component({
    selector: 'patient-ui',
    templateUrl: './Homeapp.componentMasterPage.html',
    styleUrls: ['./app.component.css']
})
export class MasterPageComponent {
    constructor(public log: BaseLogger) {
        log.Log("Error in masterpage component.. ");

    }


}
