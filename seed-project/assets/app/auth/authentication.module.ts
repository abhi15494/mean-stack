import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
    declarations: [
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [ 
        CommonModule,
        AuthenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [],
})
export class AuthenticationFeatureModule {}