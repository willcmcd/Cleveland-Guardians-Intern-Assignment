// data structures to match API response.
// ref: https://statsapi.mlb.com/api/v1/game/{gamePk}/boxscore
// with gamePk=748581 for sample used.
// ../tmp/api_v1_game_gamePk_boxscore.json

interface I_GameBoxscoreTeamTeam {
    springLeague: object, // TODO: define
    allStarStatus: string,
    id: number,
    name: string,
    link: string,
    season: number,
    venue: object, // TODO: define
    springVenue: object, // TODO: define
    teamCode: string,
    fileCode: string,
    abbreviation: string,
    teamName: string,
    locationName: string,
    firstYearOfPlay: number,
    league: object, // TODO: define
    division: object, // TODO: define
    sport: object, // TODO: define
    shortName: string,
    record: object, // TODO: define
    franchiseName: string,
    clubName: string,
    active: boolean
}

interface I_GameBoxscoreTeamStatsBatting {
    flyOuts: number,
    groundOuts: number,
    runs: number,
    doubles: number,
    triples: number,
    homeRuns: number,
    strikeouts: number,
    baseOnBalls: number,
    intentionalWalks: number,
    hits: number,
    hitByPitch: number,
    avg: string,
    atBats: number,
    obp: string,
    slg: string,
    ops: string,
    caughtStealing: number,
    stolenBases: number,
    stolenBasePercentage: string,
    groundIntoDoublePlay: number,
    groundIntoTriplePlay: number,
    plateAppearances: number,
    totalBases: number,
    rbi: number,
    leftOnBase: number,
    sacBunts: number,
    sacFlies: number
}

interface I_GameBoxscoreTeamStatsPitching {
    groundOuts: number,
    airOuts: number,
    runs: number,
    doubles: number,
    triples: number,
    homeRuns: number,
    strikeOuts: number,
    baseOnBalls: number,
    intentionalWalks: number,
    hits: number,
    hitByPitch: number,
    atBats: number,
    obp: string,
    caughtStealing: number,
    stolenBases: number,
    stolenBasePercentage: number,
    numberOfPitches: number,
    era: string,
    inningsPitched: string,
    saveOpportunities: number,
    earnedRuns: number,
    whip: string,
    battersFaced: number,
    outs: number,
    completeGames: number,
    shutouts: number,
    pitchesThrown: number,
    balls: number,
    strikes: number,
    strikePercentage: string,
    hitBatsmen: number,
    balks: number,
    wildPitches: number,
    pickoffs: number,
    groundOutsToAirouts: string,
    rbi: number,
    pitchesPerInning: string,
    runsScoredPer9: string,
    homeRunsPer9: string,
    inheritedRunners: number,
    inheritedRunnersScored: number,
    catchersInterference: number,
    sacBunts: number,
    sacFiles: number,
    passedBall: number
}

interface I_GameBoxscoreTeamStatsFielding {
    caughtStealing: number,
    stolenBases: number,
    stolenBasePercentage: string,
    assists: number,
    putOuts: number,
    errors: number,
    chances: number,
    passedBall: number,
    pickoffs: number
}

// TODO: move batting, hitting, fielding into their own interfaces.  this looks ridiculous 
interface I_GameBoxscoreTeamStats {
    batting: I_GameBoxscoreTeamStatsBatting
    pitching: I_GameBoxscoreTeamStatsPitching
    fielding: I_GameBoxscoreTeamStatsFielding
}

interface I_GameBoxscoreTeam {
    team: I_GameBoxscoreTeamTeam,
    teamStats: I_GameBoxscoreTeamStats,
    players: object, // TODO: define
    batters: [ number ],
    pitchers: [ number ],
    bench: [ number ],
    bullpen: [ number ],
    battingOrder: [ number ],
    info: [],
    note: []
}

interface I_GameBoxscoreOfficial { 
    official: {
        id: number,
        fullName: string,
        link: string
    },
    officialType: string
}

export interface I_GameBoxscore {
    copyright: string,
    teams: {
        home: I_GameBoxscoreTeam,
        away: I_GameBoxscoreTeam
    },
    officials: [
        I_GameBoxscoreOfficial
    ],
    info: [

    ]
}
