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
        this.teamCode = "";
        this.teamName = "";
        this.positionCode = "";
        this.positionName = "";
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
var PlayerStats = (function () {
    function PlayerStats() {
        this.years = [];
    }
    return PlayerStats;
}());
exports.PlayerStats = PlayerStats;
var YearStats = (function () {
    function YearStats() {
        this.playerID = "";
        this.doubles = ""; //2B
        this.BB = "";
        this.HR = "";
        this.IBB = "";
        this.WP = "";
        this.triples = ""; //3B
        this.HBP = "";
        this.DP = "";
        this.GIDP = "";
        this.POS = "";
        this.stint = "";
        this.PB = "";
        this.teamID = "";
        this.PO = "";
        this.A = "";
        this.AB = "";
        this.E = "";
        this.G = "";
        this.H = "";
        this.yearId = "";
        this.R = "";
        this.RBI = "";
        this.CS = "";
        this.ZR = "";
        this.lgID = "";
        this.InnOuts = "";
        this.SH = "";
        this.SO = "";
        this.SB = "";
        this.SF = "";
    }
    return YearStats;
}());
exports.YearStats = YearStats;
//# sourceMappingURL=home.model.js.map