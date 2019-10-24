import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    template: `
    <h4 class="my-3">Register now</h4>
    <form [formGroup]="myform" (ngSubmit)="onFormSubmit(myform)">
        <fieldset>
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
export class SigninComponent implements OnInit {
    myform: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.myform = this._fb.group({
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', Validators.required],
        })
    }

    ngOnInit(): void { }
    
    onFormSubmit(formdata) {
        console.log(formdata);
    }
}
