// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { AuthService } from "src/app/auth-service.service";


// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//     constructor(private authenticationService: AuthService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         req = req.clone({
//             setHeaders: {
//                 Authorization: 'Bearer ${this.authenticationService.value}'
//             }
//         });
//         return next.handle(req);
//     }

// }