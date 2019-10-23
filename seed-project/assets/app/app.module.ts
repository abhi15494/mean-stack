import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { AppMessageComponent } from './message/message.component';
import { MessageInputComponent } from './message/message-input.component';
import { MessageListComponent } from './message/message-list.component';

@NgModule({
    declarations: [
        AppComponent,
        AppMessageComponent,
        MessageInputComponent,
        MessageListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}