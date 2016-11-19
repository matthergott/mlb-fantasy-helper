import { Component, OnInit } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';

import { APIURL } from '../shared/constants';
import { DisplayPlayerService } from './display-player.service';
import { Player } from './display-player.model';

@Component({
    selector: 'display-player',
    providers: [DisplayPlayerService, APIURL],
    template: `
    <h2>DISPLAY PLAYER</h2>
    <p>Display Player Page</p>`
    //templateUrl: 'display-player.html'
    //directives: [CORE_DIRECTIVES]
})

export class DisplayPlayerComponent implements OnInit {
    public playerStats: Player;

    constructor(private displayPlayerService: DisplayPlayerService) { }

    ngOnInit() {
        //this.getReferences();
    }

    //...

    private getReferences(): void {
        this.displayPlayerService
            .GetSingle("chapmar01")
            .subscribe((data: Player) => this.playerStats = data,
            //error => console.log(error),
            () => console.log('Get all Items complete'));
    }
}