import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayPlayerComponent } from './frontend/displayPlayer/display-player.component';
import { HomeComponent } from './frontend/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'player/:id', component: DisplayPlayerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
