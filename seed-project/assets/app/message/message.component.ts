import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message',
    template:  `
    <div class="card text-left" *ngIf="messageData">
        <div class="card-body">
            <h4 class="card-title">
                {{messageData.username}}
                <span class="float-right">
                    <a class="mr-3" href="javascript:void(0)" title="Edit list" (click)="onEdit()">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:void(0)" title="Delete list" (click)="onDelete()">
                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                </span>
            </h4>
            <p class="card-text">
                {{messageData.content}}
            </p>
        </div>
    </div>
    `
})
export class AppMessageComponent implements OnInit {
    constructor(
        private _messageService: MessageService
    ) { }
    @Input('message') messageData: any;
    ngOnInit(): void {}

    onEdit() {
        this._messageService.updateMessage(this.messageData);
    }
    onDelete() {
        this._messageService.deleteMessage(this.messageData);
    }
}
