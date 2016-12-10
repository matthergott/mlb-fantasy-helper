export class PlayerModel {
    public players: PlayerInfo[];

    public constructor() {
        this.players = [];
    }
}

export class PlayerInfo {
    public playerID: string;
    public name: string;
    public teamCode: string;
    public teamName: string;
    public positionCode: string;
    public positionName: string;

    public constructor() {
        this.playerID = "";
        this.name = "";
        this.teamCode = "";
        this.teamName = "";
        this.positionCode = "";
        this.positionName = "";        
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

export class PlayerStats {
    public years: YearStats[];

    public constructor() {
        this.years = [];
    }
}

export class YearStats {
    public playerID: string;
    public doubles: string; //2B
    public BB: string;
    public HR: string;
    public IBB: string;
    public WP: string;
    public triples: string; //3B
    public HBP: string;
    public DP: string;
    public GIDP: string;
    public POS: string;
    public stint: string;
    public PB: string;
    public teamID: string;
    public PO: string;
    public A: string;
    public AB: string;
    public E: string;
    public G: string;
    public H: string;
    public yearId: string;
    public R: string;
    public RBI: string;
    public CS: string;
    public ZR: string;
    public lgID: string;
    public InnOuts: string;
    public SH: string;
    public SO: string;
    public SB: string;
    public SF: string;

    public constructor() {
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
}
