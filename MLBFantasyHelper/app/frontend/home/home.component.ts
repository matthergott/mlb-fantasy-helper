<<<<<<< HEAD:MLBFantasyHelper/app/frontend/home/home.component.ts
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {
=======
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {
>>>>>>> origin/master:app/frontend/home/home.component.ts
    Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
<<<<<<< HEAD:MLBFantasyHelper/app/frontend/home/home.component.ts
import { Router, ActivatedRoute, Params } from '@angular/router';

import { APIURL } from '../shared/constants';
import { HomeService } from './home.service';
import { PlayerModel } from './home.model';
import { PlayerReference } from './home.model';
import { PlayerInfo } from './home.model';
import { PlayerStats } from './home.model';
import { YearStats } from './home.model';


@Component({
    selector: 'home',
    providers: [HomeService, APIURL],
    templateUrl: 'app/frontend/home/home.html',
    styleUrls: ['app/libs/bootstrap.css']
})

export class HomeComponent implements OnInit {
    public playersList: PlayerModel;

    public query:string = '';
    public filteredList: PlayerInfo[] = [];

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private router: Router) {
        this.playersList = new PlayerModel();
    }

    ngOnInit() {
        this.getReferences();
    }

    //...

    private getReferences(): void {
        this.homeService
            .GetAllPlayers()
            .subscribe(result => this.playersList.players = this.populatePlayers(result.data),
            error => console.log(error),
            () => console.log('Get all Items complete'));
    }

    private populatePlayers(input:PlayerReference[]) {
        var arr: PlayerInfo[] = [];

        for (let element of input) {
            var player = new PlayerInfo();
            player.playerID = element.playerID;
            player.name = element.nameFirst + " " + element.nameLast;
            arr.push(player);
        }

        return arr;
    }

    private populatePlayerTeamPosInfo(input: YearStats[], playerName: string) {
        var y: PlayerInfo = new PlayerInfo();

        var pos = input.length - 1;
        y.name = playerName;
        y.playerID = input[pos].playerID;
        y.teamCode = input[pos].teamID;
        y.positionCode = input[pos].POS;

        return y;
    }

    filter() {
        if (this.query.length <= 3) {
            this.filteredList = [];            
        } else {
            this.filteredList = this.populateFilteredList();
        }
    }

    populateFilteredList() {
        var arr: PlayerInfo[] = [];

        var counter: number = 0;

        for (let element of this.playersList.players) {
            var str: string = element.name.toLowerCase();
            if (str.indexOf(this.query.toLowerCase()) != -1) {
                var temp = new PlayerInfo();
                this.homeService
                    .GetSingle(element.playerID)
                    .subscribe(result => arr.push(this.populatePlayerTeamPosInfo(result.data, element.name)),
                    error => console.log(error),
                    () => console.log('Get items complete'));
                counter += 1;

                //this.homeService
                //    .GetSingle(element.playerID)
                //    .subscribe(result => temp = this.populatePlayerTeamPosInfo(result.data),
                //    error => console.log(error),
                //    () => console.log('Get items complete'));
                //temp.name = element.name;
                //arr.push(temp);
                //counter += 1;
            }
            if (counter > 12) {
                return arr;
            }
        }

        return arr;
    }

    select(item: PlayerInfo) {
        this.query = item.name;
        this.filteredList = [];
        this.router.navigate(['/player', item.playerID]);
    }
    
=======
import { Router, ActivatedRoute, Params } from '@angular/router';

import { APIURL } from '../shared/constants';
import { HomeService } from './home.service';
import { PlayerModel } from './home.model';
import { PlayerReference } from './home.model';
import { PlayerInfo } from './home.model';
import { PlayerStats } from './home.model';
import { YearStats } from './home.model';


@Component({
    selector: 'home',
    providers: [HomeService, APIURL],
    templateUrl: 'app/frontend/home/home.html',
    styleUrls: ['app/libs/bootstrap.css']
})

export class HomeComponent implements OnInit {
    public playersList: PlayerModel;

    public query:string = '';
    public filteredList: PlayerInfo[] = [];

    constructor(
        private homeService: HomeService,
        private route: ActivatedRoute,
        private router: Router) {
        this.playersList = new PlayerModel();
    }

    ngOnInit() {
        this.getReferences();
    }

    //...

    private getReferences(): void {
        this.homeService
            .GetAllPlayers()
            .subscribe(result => this.playersList.players = this.populatePlayers(result.data),
            error => console.log(error),
            () => console.log('Get all Items complete'));
    }

    private populatePlayers(input:PlayerReference[]) {
        var arr: PlayerInfo[] = [];

        for (let element of input) {
            var player = new PlayerInfo();
            player.playerID = element.playerID;
            player.name = element.nameFirst + " " + element.nameLast;
            arr.push(player);
        }

        return arr;
    }

    private populatePlayerTeamPosInfo(input: YearStats[], playerName: string) {
        var y: PlayerInfo = new PlayerInfo();

        var pos = input.length - 1;
        y.name = playerName;
        y.playerID = input[pos].playerID;
        y.teamCode = input[pos].teamID;
        y.positionCode = input[pos].POS;

        return y;
    }

    filter() {
        if (this.query.length <= 3) {
            this.filteredList = [];            
        } else {
            this.filteredList = this.populateFilteredList();
        }
    }

    populateFilteredList() {
        var arr: PlayerInfo[] = [];

        var counter: number = 0;

        for (let element of this.playersList.players) {
            var str: string = element.name.toLowerCase();
            if (str.indexOf(this.query.toLowerCase()) != -1) {
                var temp = new PlayerInfo();
                this.homeService
                    .GetSingle(element.playerID)
                    .subscribe(result => arr.push(this.populatePlayerTeamPosInfo(result.data, element.name)),
                    error => console.log(error),
                    () => console.log('Get items complete'));
                counter += 1;

                //this.homeService
                //    .GetSingle(element.playerID)
                //    .subscribe(result => temp = this.populatePlayerTeamPosInfo(result.data),
                //    error => console.log(error),
                //    () => console.log('Get items complete'));
                //temp.name = element.name;
                //arr.push(temp);
                //counter += 1;
            }
            if (counter > 12) {
                return arr;
            }
        }

        return arr;
    }

    select(item: PlayerInfo) {
        this.query = item.name;
        this.filteredList = [];
        this.router.navigate(['/player', item.playerID]);
    }
    
>>>>>>> origin/master:app/frontend/home/home.component.ts
}