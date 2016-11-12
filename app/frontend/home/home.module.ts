import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home.component';
//import { DisplayPlayerComponent } from '../displayPlayer/displayPlayer.component';

import { HomeService } from './home.service';

import { HomeRoutingModule } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        //DisplayPlayerComponent
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
