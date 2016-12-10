"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var constants_1 = require('../shared/constants');
var home_service_1 = require('./home.service');
var home_model_1 = require('./home.model');
var home_model_2 = require('./home.model');
var HomeComponent = (function () {
    function HomeComponent(homeService, route, router) {
        this.homeService = homeService;
        this.route = route;
        this.router = router;
        this.query = '';
        this.filteredList = [];
        this.playersList = new home_model_1.PlayerModel();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getReferences();
    };
    //...
    HomeComponent.prototype.getReferences = function () {
        var _this = this;
        this.homeService
            .GetAllPlayers()
            .subscribe(function (result) { return _this.playersList.players = _this.populatePlayers(result.data); }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    HomeComponent.prototype.populatePlayers = function (input) {
        var arr = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var element = input_1[_i];
            var player = new home_model_2.PlayerInfo();
            player.playerID = element.playerID;
            player.name = element.nameFirst + " " + element.nameLast;
            arr.push(player);
        }
        return arr;
    };
    HomeComponent.prototype.populatePlayerTeamPosInfo = function (input, playerName) {
        var y = new home_model_2.PlayerInfo();
        var pos = input.length - 1;
        y.name = playerName;
        y.playerID = input[pos].playerID;
        y.teamCode = input[pos].teamID;
        y.positionCode = input[pos].POS;
        return y;
    };
    HomeComponent.prototype.filter = function () {
        if (this.query.length <= 3) {
            this.filteredList = [];
        }
        else {
            this.filteredList = this.populateFilteredList();
        }
    };
    HomeComponent.prototype.populateFilteredList = function () {
        var _this = this;
        var arr = [];
        var counter = 0;
        var _loop_1 = function(element) {
            str = element.name.toLowerCase();
            if (str.indexOf(this_1.query.toLowerCase()) != -1) {
                temp = new home_model_2.PlayerInfo();
                this_1.homeService
                    .GetSingle(element.playerID)
                    .subscribe(function (result) { return arr.push(_this.populatePlayerTeamPosInfo(result.data, element.name)); }, function (error) { return console.log(error); }, function () { return console.log('Get items complete'); });
                counter += 1;
            }
            if (counter > 12) {
                return { value: arr };
            }
        };
        var this_1 = this;
        var str, temp;
        for (var _i = 0, _a = this.playersList.players; _i < _a.length; _i++) {
            var element = _a[_i];
            var state_1 = _loop_1(element);
            if (typeof state_1 === "object") return state_1.value;
        }
        return arr;
    };
    HomeComponent.prototype.select = function (item) {
        this.query = item.name;
        this.filteredList = [];
        this.router.navigate(['/player', item.playerID]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [home_service_1.HomeService, constants_1.APIURL],
            templateUrl: 'app/frontend/home/home.html',
            styleUrls: ['app/libs/bootstrap.css']
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.ActivatedRoute, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map