import {
    NgForm, FormGroup, FormControl,
    Validators, FormBuilder
} from "@angular/forms";
// import { AuthService } from './auth.service';


export class Login {

    username: string;
    password: string;

    formLoginGroup: FormGroup = null;
    // constructor(private authService: AuthService) { }
}