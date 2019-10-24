import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `    
    <div class="container">
        <h1 class="display-4">Page Not Found</h1>
        <a class="btn btn-link" routerLink="/Message" role="button">Home</a>
    </div>
    `
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
