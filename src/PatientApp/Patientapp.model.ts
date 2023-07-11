import {
    NgForm, FormGroup, FormControl,
    Validators, FormBuilder
} from "@angular/forms";

export class Patient {
    id: number = 0;
    name: string = "";
    age: number = 0;
    code: String = "";

    formPatientGroup: FormGroup = null;
    constructor() {

        var _builder = new FormBuilder();
        this.formPatientGroup = _builder.group({});
        this.formPatientGroup.addControl("patientnameControl",
            new FormControl('', Validators.required));

        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        this.formPatientGroup.addControl("patientcodeControl",
            new FormControl("", Validators.compose(validationcollection)));

    }


}