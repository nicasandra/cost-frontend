// External
import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

// Internal
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path:'users', component: UsersComponent}
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}