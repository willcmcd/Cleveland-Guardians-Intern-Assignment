interface I_ScheduleGameStatus {
    abstractGameStatus: string,
    codedGameState: string,
    detailedState: string,
    statusCode: string,
    startTimeTBD: boolean,
    abstractGameCode: string
}

interface I_ScheduleGameTeam {
    leagueRecord: {
        wins: number,
        losses: number,
        pct: string
    },
    score: number,
    team: {
        id: number,
        name: string,
        link: string
    },
    isWinner: boolean,
    splitSquad: boolean,
    seriesNumber: number
}

interface I_ScheduleGameVenue {
    id: number,
    name: string,
    link: string
}

// NOTE: When this string is accessed, it provides tons of game data.
export interface I_ScheduleGameContent {
    link: string
}

export interface I_ScheduleGame {
    gamePk: number,
    gameGuid: string,
    link: string,
    gameType: string,
    season: number, // actually string, but I want to see if it converts.
    gameDate: string,
    officialDate: string,
    status: I_ScheduleGameStatus,
    teams: {
        home: I_ScheduleGameTeam,
        away: I_ScheduleGameTeam
    },
    venue: I_ScheduleGameVenue,
    content: I_ScheduleGameContent,
    isTie: boolean,
    isFeaturedGame: boolean,
    gameNumber: number,
    publicFacing: boolean,
    doubleHeader: string,
    gamedayType: string,
    tiebreaker: string,
    calendarEventID: string,
    seasonDisplay: string,
    dayNight: string,
    description: string,
    scheduledInnings: number,
    reverseHomeAwayStatus: boolean,
    inningBreakLength: number,
    gamesInSeries: number,
    seriesGameNumber: number,
    seriesDescription: string,
    recordSource: string,
    ifNecessary: string,
    ifNecessaryDescription: string
}

// HAVENT FOUND A INSTANCE OF THIS TO GO OFF OF, THIS IS A GUESS.
interface I_ScheduleEvent {
    eventGuid: string,
    link: string
}

export interface I_ScheduleDate {
    date: string,
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalGamesInProgress: number,
    games: I_ScheduleGame []
    events: I_ScheduleEvent []
}

export interface I_SchedulePostseason {
    copyright: string,
    totalItems: number,
    totalEvents: number,
    totalGames: number,
    totalGamesInProgress: number,
    wait: number,
    dates: I_ScheduleDate []
}