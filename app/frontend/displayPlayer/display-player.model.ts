export class PlayerStats {
    public years: YearStats[];

    public constructor() {
        this.years = [];
    }
}

export class YearStats {
    public playerID: string;
    public doubles: string; //2B
    public BB: string; //walks
    public HR: string; //home runs
    public IBB: string;
    public WP: string;
    public triples: string; //3B
    public HBP: string; //hit by a pitch
    public DP: string;
    public GIDP: string; //ground into double play
    public POS: string; //position
    public stint: string;
    public PB: string;
    public teamID: string; //team
    public PO: string;
    public A: string;
    public AB: string //at bats
    public E: string;
    public G: string; //games played?
    public H: string; //hits?
    public yearID: string;
    public R: string; //runs
    public RBI: string; //rbis
    public CS: string;
    public ZR: string;
    public lgID: string;
    public InnOuts: string;
    public SH: string;
    public SO: string; //strike outs
    public SB: string; //stolen bases
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
}