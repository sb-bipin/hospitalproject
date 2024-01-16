import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth-service.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _token: AuthService) {

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {

        // const tokenAG = this._token.getToken();

        console.log("Token at authguard: " + AuthService.tokenValue);

        if (AuthService.tokenValue && AuthService.tokenValue.length !== 0) {
            return true;
        }
        this._router.navigate(['/Login/Check']);
        return false;
    }
}

