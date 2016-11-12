export class PlayersList {
    public Players: PlayersReference[];

    public constructor() {
        this.Players = [];
    }
}

export class PlayersReference {
    public Id: string;
    //public Name: string;

    public constructor() {
        this.Id = "";
        //this.Name = "";
    }
}
