import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DisplayPlayerComponent } from '../displayPlayer/display-player.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'display-player', component: DisplayPlayerComponent },
            //{ path: 'player/:id', component: DisplayPlayerComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DisplayPlayerRoutingModule { }