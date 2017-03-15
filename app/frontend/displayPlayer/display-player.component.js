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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
//import { CORE_DIRECTIVES } from '@angular/common';
var constants_1 = require('../shared/constants');
var display_player_service_1 = require('./display-player.service');
var display_player_model_1 = require('./display-player.model');
var DisplayPlayerComponent = (function () {
    function DisplayPlayerComponent(displayPlayerService, activatedRoute) {
        this.displayPlayerService = displayPlayerService;
        this.activatedRoute = activatedRoute;
        this.playerStats = new display_player_model_1.PlayerStats();
    }
    DisplayPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            var playerId = param['id'];
            _this.getReferences(playerId);
        });
    };
    //...
    DisplayPlayerComponent.prototype.getReferences = function (Id) {
        var _this = this;
        this.displayPlayerService
            .GetSingle(Id)
            .subscribe(function (result) { return _this.playerStats.years = _this.populatePlayers(result.data); }, function (error) { return console.log(error); }, function () { return console.log('Get items complete'); });
    };
    DisplayPlayerComponent.prototype.populatePlayers = function (input) {
        var arr = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var element = input_1[_i];
            arr.push(element);
        }
        return arr;
    };
    DisplayPlayerComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    DisplayPlayerComponent = __decorate([
        core_1.Component({
            selector: 'display-player',
            providers: [display_player_service_1.DisplayPlayerService, constants_1.APIURL],
            templateUrl: 'app/frontend/displayPlayer/display-player.html'
        }), 
        __metadata('design:paramtypes', [display_player_service_1.DisplayPlayerService, router_1.ActivatedRoute])
    ], DisplayPlayerComponent);
    return DisplayPlayerComponent;
}());
exports.DisplayPlayerComponent = DisplayPlayerComponent;
//template: `
//<h2>DISPLAY PLAYER</h2>
//<p>Display Player Page</p>`
//directives: [CORE_DIRECTIVES] 
//# sourceMappingURL=display-player.component.js.map