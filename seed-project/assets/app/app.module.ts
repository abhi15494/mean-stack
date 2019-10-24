import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './generic/header.component';

import { MessageFeatureModule } from './message/message.module';
import { AuthenticationFeatureModule } from './auth/authentication.module';
import { PageNotFoundComponent } from './generic/pagenotfound.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MessageFeatureModule,
        AuthenticationFeatureModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}