import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './frontend/home/home.component'
import { DisplayPlayerComponent } from './frontend/displayPlayer/display-player.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [],
    declarations: [
        AppComponent,
        HomeComponent,
        DisplayPlayerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}