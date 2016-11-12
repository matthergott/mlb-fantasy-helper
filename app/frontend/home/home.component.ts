import {
    Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { APIURL } from '../shared/constants';
import { HomeService } from './home.service';
import { PlayersList } from './home.model';


@Component({
    selector: 'home',
    providers: [HomeService, APIURL],
    //template: `
    //<h2>HOME</h2>
    //<p>Home Page</p>`,
    templateUrl: 'app/frontend/home/home.html'
    //directives: [CORE_DIRECTIVES]

})

export class HomeComponent implements OnInit {
    public playersList: PlayersList[];

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.getReferences();
    }

    //...

    private getReferences(): void {
        this.homeService
            .GetAllPlayers()
            .subscribe((data: PlayersList[]) => this.playersList = data,
            error => console.log(error),
            () => console.log('Get all Items complete'));
    }
}