import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authentication',
    template: `
        <h4 class="display-4">Authentication Section</h4>
        <div class="row">
            <div class="col-12 col-sm-10 col-md-6 my-2 ml-3 border px-3 pb-4">
                <nav class="nav nav-tabs nav-stacked mt-4 mb-2">
                    <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'auth', 'signin']">Sign in</a>
                    <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'auth', 'signup']">Register</a>
                    <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'auth', 'logout']">Logout</a>
                </nav>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AuthenticationComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
