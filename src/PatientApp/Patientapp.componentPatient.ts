import { Component } from '@angular/core';
import { Patient } from './Patientapp.model';
import { CommonModule } from '@angular/common';
import { BaseLogger, LoggerEmail } from 'src/common/logger';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './Patientapp.componentPatient.html',

})
export class PatientComponent {


  patientObj: Patient = new Patient();
  patientObjs: Array<Patient> = new Array<Patient>();

  constructor(public http: HttpClient) {

  }


  Submit() {
    var patdto: any = {};
    patdto.code = this.patientObj.code;
    patdto.name = this.patientObj.name;
    patdto.age = this.patientObj.age;

    var observbl = this.http.post("https://localhost:44301/api/values"
      , patdto);

    observbl.subscribe(res => this.success(res),
      res => this.error(res));

  }

  success(res) {
    alert("success");
  }
  error(res) {
    console.log("There is a n error:" + res);
  }
  // constructor(public log: BaseLogger) {

  // }


  Update() {
    if (this.patientObj.id == 0) {
      // this.log.Log("Error in patient component.. ");


      //new patient
      this.patientObj.id = this.patientObjs.length + 1;
      this.patientObjs.push(this.patientObj);
      this.patientObj = new Patient();
    }
    else {
      //update patient
      this.patientObjs.forEach(element => {
        if (element.id == this.patientObj.id) {
          element.name = this.patientObj.name;
          element.age = this.patientObj.age;
          this.patientObj = new Patient();
        }
      });
    }
  }
  Edit(patSelected: Patient) {
    this.patientObj = new Patient();
    this.patientObj.name = patSelected.name;
    this.patientObj.age = patSelected.age;
    this.patientObj.id = patSelected.id;


  }
  Remove(patRemoved: Patient) {
    const index = this.patientObjs.indexOf(patRemoved);
    if (index !== -1) {
      this.patientObjs.splice(index, 1);
      this.patientObj = new Patient();

    }
  }



  // editRow(pat: Patient) {
  //   const index = this.patientObjs.findIndex(p => p === pat);

  //   if (index !== -1) {
  //     // // Update the desired properties of the patient object
  //     // this.patientObjs[index].name = "Updated Name";
  //     // this.patientObjs[index].age = 20;

  //     this.patientObjs[index].name = prompt("Enter new name", this.patientObjs[index].name)!;
  //     this.patientObjs[index].age = parseInt(prompt("Enter new age", this.patientObjs[index].age.toString())!);
  //   }
  // }






}
