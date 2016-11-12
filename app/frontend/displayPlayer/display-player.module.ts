import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { DisplayPlayerComponent } from './display-player.component';
//import { DisplayPlayerComponent } from '../displayPlayer/displayPlayer.component';

import { DisplayPlayerService } from './display-player.service';

import { DisplayPlayerRoutingModule } from './display-player.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DisplayPlayerRoutingModule
    ],
    declarations: [
        DisplayPlayerComponent,
        //DisplayPlayerComponent
    ],
    providers: [
        DisplayPlayerService
    ]
})
export class DisplayPlayerModule { }
