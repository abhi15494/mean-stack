import { Injectable } from '@angular/core';
import { MessageModel } from './message.model';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../constants/api.constants';

@Injectable()
export class MessageService {

    constructor(
        private _http: HttpClient
    ) {}

    private messages: MessageModel[] = [];

    addMessage(message: MessageModel) {
        this._http.post(ApiConstants.message.save, {});
        this.messages.push(message);
        
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: MessageModel) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    updateMessage(message: MessageModel) {
        this.messages.find(v => v==message).content = 'ContentUpdated';
    }
}