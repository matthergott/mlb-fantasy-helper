import {
    Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { APIURL } from '../shared/constants';
import { HomeService } from './home.service';
import { PlayerModel } from './home.model';
import { PlayerReference } from './home.model';
import { PlayerInfo } from './home.model';


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
            var temp: string = element.name.toLowerCase();
            if (temp.indexOf(this.query.toLowerCase()) != -1) {
                arr.push(element);
                counter += 1;
            }
            if (counter > 12) {
                return arr;
            }
        }

        return arr;
    }

    select(item:string) {
        this.query = item;
        this.filteredList = [];
    }

    //private getPlayerIds(arr: Object): PlayerModel {
    //    var output: PlayerModel = new PlayerModel();
    //    output.players = [];

    //    for (let element of arr.data) {
    //        var thing = new PlayersReference();
    //        thing.playerID = element.Id;
    //        thing.nameFirst = element.nameFirst;
    //        thing.nameLast = element.nameLast;
    //        output.players.push(thing);
    //    }

    //    return output;
    //}
}