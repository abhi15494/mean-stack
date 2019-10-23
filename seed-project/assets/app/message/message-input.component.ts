import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message-input',
    template: `
    <div class="p-2 mb-3">
        <div class="form-group">
            <label for="formContent">Content</label>
            <input type="text" class="form-control" name="content" id="formContent" aria-describedby="helpId" placeholder="Enter content">
        </div>
        <div class="my-3">
            <a name="" id="" class="btn btn-primary" href="#" role="button">Save</a>
        </div>
    </div>
    `
})
export class MessageInputComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        console.log('running')
    }
}
