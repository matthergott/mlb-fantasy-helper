import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DisplayPlayerComponent } from '../displayPlayer/display-player.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'home', component: HomeComponent },
            //{ path: 'player/:id', component: DisplayPlayerComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }