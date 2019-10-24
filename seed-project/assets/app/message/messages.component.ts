import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-messages',
    template:  `
    <h4 class="display-4">Message Section</h4>
    <app-message-input></app-message-input>
    <app-message-list></app-message-list>
    `,
})
export class MessagesComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
