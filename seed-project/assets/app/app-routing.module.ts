import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MessagesComponent } from './message/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { PageNotFoundComponent } from './generic/pagenotfound.component';

const routes: Routes = [
    { path: 'auth', loadChildren: './auth/authentication.module#AuthenticationFeatureModule' },
    { path: 'message', component: MessagesComponent },
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/pagenotfound' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
