import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from './message.service';
import { MessageModel } from './message.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-message-input',
    template: `
    <div class="p-2 mb-3">
        <form (ngSubmit)="onFormSubmit(f)" #f="ngForm" >
            <div class="form-group">
                <label for="formContent">Content</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="content" 
                    id="formContent" 
                    aria-describedby="helpId" 
                    placeholder="Enter content" 
                    ngModel
                    required
                    >
            </div>
            <div class="my-3">
                <button class="btn btn-primary" role="submit" type="submit">Save</button>
            </div>
        </form>
    </div>
    `
})
export class MessageInputComponent implements OnInit {
    constructor(
        private _messageService: MessageService
    ) { }
    ngOnInit(): void { }

    onFormSubmit(formval: NgForm) {
        const input = formval.value.content;
        if (input && input !== '') {
            this._messageService.addMessage(new MessageModel(input, 'Author'))
        } else {
            alert('Please insert value first');
        }
    }
}
