import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';

import { APIURL } from '../shared/constants';
import { DisplayPlayerService } from './display-player.service';
import { PlayerStats } from './display-player.model';
import { YearStats } from './display-player.model';

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
    public playerStats: PlayerStats;
    private subscription: Subscription;

    constructor(
        private displayPlayerService: DisplayPlayerService,
        private activatedRoute: ActivatedRoute) {
        this.playerStats = new PlayerStats();
    }

    ngOnInit() {
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let playerId = param['Id'];
                this.getReferences(playerId);
            });
    }

    //...

    private getReferences(Id:string): void {
        this.displayPlayerService
            .GetSingle(Id)
            .subscribe(result => this.playerStats.years = this.populatePlayers(result.data),
            error => console.log(error),
            () => console.log('Get items complete'));
    }

    private populatePlayers(input: YearStats[]) {
        var arr: YearStats[] = [];

        for (let element of input) {
            arr.push(element);
        }

        return arr;
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }
}