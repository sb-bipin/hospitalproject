// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  // getToken: string = '';
  // private readonly TOKEN_KEY = 'token';

  public static tokenValue: string = "";


  constructor() { }

  // setToken(token: string): void {
  //   // localStorage.setItem(this.TOKEN_KEY, token);
  //   // console.log("token value at auth service:  " + token);
  //   this.tokenValue = token;
  // }

  // getToken(): string | null {
  //   return this.tokenValue;
  //   // return localStorage.getItem(this.TOKEN_KEY);
  // }


  // removeToken(): void {
  //   localStorage.removeItem(this.TOKEN_KEY);
  // }

  // isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   // Check if token is not expired or any other authentication logic
  //   return !!token;
  // }

}
