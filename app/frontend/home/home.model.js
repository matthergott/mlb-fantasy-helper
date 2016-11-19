"use strict";
var PlayerModel = (function () {
    function PlayerModel() {
        this.players = [];
    }
    return PlayerModel;
}());
exports.PlayerModel = PlayerModel;
var PlayerInfo = (function () {
    function PlayerInfo() {
        this.playerID = "";
        this.name = "";
    }
    return PlayerInfo;
}());
exports.PlayerInfo = PlayerInfo;
var PlayerReference = (function () {
    function PlayerReference() {
        this.playerID = "";
        this.nameLast = "";
        this.nameFirst = "";
    }
    return PlayerReference;
}());
exports.PlayerReference = PlayerReference;
//export class PlayersReference {
//    public Id: string;
//    //public Name: string;
//    public constructor() {
//        this.Id = "";
//        //this.Name = "";
//    }
//}
//# sourceMappingURL=home.model.js.map