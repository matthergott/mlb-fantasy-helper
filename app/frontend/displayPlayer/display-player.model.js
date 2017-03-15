"use strict";
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
        this.yearID = "";
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
//# sourceMappingURL=display-player.model.js.map