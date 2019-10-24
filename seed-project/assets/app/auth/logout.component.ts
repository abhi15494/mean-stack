import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `
    <h4 class="my-3">Logout now</h4>
    <a (click)="onLogout()" class="btn btn-primary" href="javascript:void(0)" role="button">Logout</a>
    `
})
export class LogoutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    onLogout() {
        console.log('logout')
    }
}
