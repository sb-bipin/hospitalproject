// login-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Login } from './Login.model';
import { config } from 'src/common/Common-config';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../app/auth-service.service';

@Component({
  templateUrl: './Login.componentLogin.html',

})

export class LoginFormComponent {

  // loginObj: Login = new Login();
  // loginObjs: Array<Login> = new Array<Login>();


  // constructor(public http: HttpClient,
  //   public config: config) {

  // }

  // login(): void {
  //   const credentials = { id: this.username, password: this.password };
  //   console.log(credentials)

  //   var patdto: any = {};
  //   patdto.username = "test";
  //   patdto.password = "123";


  //   var observbl = this.http.post(this.config.apiurl
  //     , patdto);

  //   observbl.subscribe(res => this.success(res),
  //     res => this.error(res));

  // }

  // success(res) {
  //   this.loginObjs = res;
  //   this.loginObj = new Login();
  //   alert("success");
  // }
  // error(res) {
  //   console.log("There is a n error:" + res);
  // }






  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private route: Router,
    private config: config, private authService: AuthService) {

  }


  // ngOnInit(): void {
  //   // Ensure the authentication process is complete before accessing the token
  //   setTimeout(() => {
  //     const token = this.authService.tokenValue;
  //     console.log('Token:', token);
  //   }, 1000); // Adjust the delay as needed

  // }

  login(): void {


    const credentials = { username: this.username, password: this.password };

    this.http.post<any>(this.config.apiurl + "security", credentials).subscribe(
      response => {
        // Assuming your API returns a JWT token in the response
        // const token1 = response.value;

        console.log("Token at login : " + response.values)
        AuthService.tokenValue = response.values;

        // this.authService.tokenValue = token1;
        // this.authService.setToken(response.value);
        // Save the token in local storage or a cookie
        // localStorage.setItem('token', token);
        // You may want to decode the token and store user information in your AuthService
        // authService.setUserInfo(decodedUserInfo);
        alert("Log in success..!");
        // Redirect to a success page or any other logic you need
        this.route.navigate(["/Home"]);
        // this.router.navigate(['/success']);
      },
      error => {
        alert("Log in failed..!");
        console.error('Login failed:', error);
        // Handle login error (show a message, redirect, etc.)
      }
    );
  }




  // onLoginSuccess(token: string): void {
  //   this.authService.setToken(token);
  // }


}




