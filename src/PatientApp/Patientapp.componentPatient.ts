import { Component, OnInit } from '@angular/core';
import { Patient } from './Patientapp.model';
import { CommonModule } from '@angular/common';
import { BaseLogger, LoggerEmail } from 'src/common/logger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { config } from 'src/common/Common-config';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  templateUrl: './Patientapp.componentPatient.html',

})
export class PatientComponent {


  patientObj: Patient = new Patient();
  patientObjs: Array<Patient> = new Array<Patient>();

  constructor(public http: HttpClient,
    public config: config,
    private authService: AuthService) { }


  // ngOnInit(): void {
  //   // Ensure the authentication process is complete before accessing the token
  //   setTimeout(() => {
  //     const token = this.authService.getToken();
  //     console.log('Token:', token);
  //   }, 1000); // Adjust the delay as needed

  // }

  Submit() {

    const tokens = AuthService.tokenValue;

    var headers_object = new HttpHeaders({
      'Authorization': "Bearer " + tokens,
    });

    const httpOptions = {
      headers: headers_object
    };


    var patdto: any = {};
    patdto.code = this.patientObj.code;
    patdto.name = this.patientObj.name;
    patdto.age = this.patientObj.age;

    var observbl = this.http.post(this.config.apiurl + 'Values', patdto, httpOptions);

    observbl.subscribe(res => this.success(res),
      res => this.error(res));

  }

  success(res) {
    this.patientObjs = res;
    this.patientObj = new Patient();
    // alert("success");
  }
  error(res) {
    console.log("There is a n error:" + res);
  }



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
