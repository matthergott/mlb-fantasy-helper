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
//import { CORE_DIRECTIVES } from '@angular/common';
var constants_1 = require('../shared/constants');
var display_player_service_1 = require('./display-player.service');
var DisplayPlayerComponent = (function () {
    function DisplayPlayerComponent(displayPlayerService) {
        this.displayPlayerService = displayPlayerService;
    }
    DisplayPlayerComponent.prototype.ngOnInit = function () {
        //this.getReferences();
    };
    //...
    DisplayPlayerComponent.prototype.getReferences = function () {
        var _this = this;
        this.displayPlayerService
            .GetSingle("chapmar01")
            .subscribe(function (data) { return _this.playerStats = data; }, 
        //error => console.log(error),
        function () { return console.log('Get all Items complete'); });
    };
    DisplayPlayerComponent = __decorate([
        core_1.Component({
            selector: 'display-player',
            providers: [display_player_service_1.DisplayPlayerService, constants_1.APIURL],
            template: "\n    <h2>DISPLAY PLAYER</h2>\n    <p>Display Player Page</p>"
        }), 
        __metadata('design:paramtypes', [display_player_service_1.DisplayPlayerService])
    ], DisplayPlayerComponent);
    return DisplayPlayerComponent;
}());
exports.DisplayPlayerComponent = DisplayPlayerComponent;
//# sourceMappingURL=display-player.component.js.map