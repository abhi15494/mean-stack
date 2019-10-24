import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    template: `
    <h4 class="my-3">Register now</h4>
    <form [formGroup]="myform" (ngSubmit)="onFormSubmit(myform)">
        <fieldset>
            <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                formControlName="firstName"
                placeholder="Enter Firstname">
            </div>
            <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                formControlName="lastName"
                placeholder="Enter LastName">
            </div>
            <div class="form-group">
            <input 
                type="email" 
                class="form-control" 
                formControlName="email"
                placeholder="Enter Email">
            </div>
            <div class="form-group">
            <input 
                type="password" 
                class="form-control" 
                formControlName="password"
                placeholder="Enter Password">
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
        </fieldset>
    </form>
`
})
export class SignupComponent implements OnInit {
    myform: FormGroup;

    constructor() {
        this.myform = new FormGroup({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required),
        })
    }

    ngOnInit(): void { }

    onFormSubmit(formdata) {
        console.log(formdata);
    }
}
