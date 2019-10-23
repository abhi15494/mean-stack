import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-message',
    template:  `
    <div class="card text-left" *ngIf="messageData">
        <div class="card-body">
            <h4 class="card-title">
                {{messageData.username}}
                <span class="float-right">
                    <a class="mr-3" href="#" title="Edit list" (click)="onEdit()">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                    <a href="#" title="Delete list" (click)="onDelete()">
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
    constructor() { }
    @Input('message') messageData: any;
    ngOnInit(): void {}
    @Output() editClicked = new EventEmitter<string>();
    @Output() deleteClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit(this.messageData.username);
    }
    onDelete() {
        this.deleteClicked.emit(this.messageData.username);
    }
}
