export class PlayerModel {
    public players: PlayerInfo[];

    public constructor() {
        this.players = [];
    }
}

export class PlayerInfo {
    public playerID: string;
    public name: string;

    public constructor() {
        this.playerID = "";
        this.name = "";
    }
}

export class PlayerReference {
    public playerID: string;
    public nameLast: string;
    public nameFirst: string;

    public constructor() {
        this.playerID = "";
        this.nameLast = "";
        this.nameFirst = "";
    }
}

//export class PlayersReference {
//    public Id: string;
//    //public Name: string;

//    public constructor() {
//        this.Id = "";
//        //this.Name = "";
//    }
//}
