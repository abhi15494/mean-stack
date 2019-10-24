import { Component, OnInit } from '@angular/core';
import { MessageModel } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="row no-gutters">
            <div class="col-6 p-2" *ngFor="let item of _messageService.getMessage()">
                <app-message [message]="item">
                </app-message>
            </div>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    content: string = '';

    constructor(
        private _messageService: MessageService
    ) { }

    ngOnInit() { }
}
