import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayPlayerComponent } from './frontend/displayPlayer/display-player.component';
import { HomeComponent } from './frontend/home/home.component';

import { DisplayPlayerService } from './frontend/displayPlayer/display-player.service';
import { HomeService } from './frontend/home/home.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [
        DisplayPlayerService,
        HomeService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DisplayPlayerComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}