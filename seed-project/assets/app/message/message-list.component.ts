import { Component, OnInit } from '@angular/core';
import { MessageModel } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="row no-gutters">
            <div class="col-6 p-2" *ngFor="let item of data">
                <app-message [message]="item" (editClicked)="onEditClicked($event)" (deleteClicked)="onDeleteClicked($event)">
                </app-message>
            </div>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    data: any = [
        new MessageModel('This is a message', 'Author 1'),
        new MessageModel('This is a message', 'Author 2'),
        new MessageModel('This is a message', 'Author 3'),
        new MessageModel('This is a message', 'Author 4'),
        new MessageModel('This is a message', 'Author 5'),
        new MessageModel('This is a message', 'Author 6'),
        new MessageModel('This is a message', 'Author 7'),
        new MessageModel('This is a message', 'Author 8'),
        new MessageModel('This is a message', 'Author 9'),
        new MessageModel('This is a message', 'Author 10')
    ];
    content: string = '';

    ngOnInit() {}

    onEditClicked(value) {
        console.log(value)
        this.content = value;
    }

    onDeleteClicked(value) {
        console.log(value)
    }
}
