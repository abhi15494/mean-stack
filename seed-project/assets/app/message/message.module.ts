import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { AppMessageComponent } from './message.component';
import { MessageInputComponent } from './message-input.component';
import { MessageListComponent } from './message-list.component';
import { MessagesComponent } from './messages.component';

@NgModule({
    declarations: [
        AppMessageComponent,
        MessageInputComponent,
        MessageListComponent,
        MessagesComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [],
    providers: [
        MessageService
    ],
})
export class MessageFeatureModule {}