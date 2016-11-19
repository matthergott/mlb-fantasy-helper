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
    HomeComponent.prototype.filter = function () {
        if (this.query.length <= 3) {
            this.filteredList = [];
        }
        else {
            this.filteredList = this.populateFilteredList();
        }
    };
    HomeComponent.prototype.populateFilteredList = function () {
        var arr = [];
        var counter = 0;
        for (var _i = 0, _a = this.playersList.players; _i < _a.length; _i++) {
            var element = _a[_i];
            var temp = element.name.toLowerCase();
            if (temp.indexOf(this.query.toLowerCase()) != -1) {
                arr.push(element);
                counter += 1;
            }
            if (counter > 12) {
                return arr;
            }
        }
        return arr;
    };
    HomeComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [home_service_1.HomeService, constants_1.APIURL],
            //template: `
            //<h2>HOME</h2>
            //<p>Home Page</p>`,
            templateUrl: 'app/frontend/home/home.html'
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_1.ActivatedRoute, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map