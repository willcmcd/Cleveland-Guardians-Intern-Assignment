
export interface I_TeamRosterPlayer {
    person: {
        fullName: string,
        id: string
    },
    jerseyNumber: number,
    position: {
        name: string
    }
}

export interface I_TeamRoster {
    roster: [
        I_TeamRosterPlayer
    ]
}

interface I_TeamInfoLeague {
    id: number,
    name: string,
    link: string,
}

export interface I_TeamInfoVenue {
    id: number,
    name: string,
    link: string
}

interface I_TeamInfoDivision {
    id: number,
    name: string,
    link: string,
}

interface I_TeamInfoSport {
    id: number,
    link: string,
    name: string
}

export interface I_TeamInfo {
    springLeague: I_TeamInfoLeague,
    allStarStatus: string,
    id: number,
    name: string,
    link: string,
    season: number,
    venue: I_TeamInfoVenue,
    springVenue: I_TeamInfoVenue,
    teamCode: string,
    fileCode: string,
    abbreviation: string,
    teamName: string,
    locationName: string,
    firstYearOfPlay: string,
    league: I_TeamInfoLeague,
    division: I_TeamInfoDivision,
    sport: I_TeamInfoSport,
    shortName: string,
    franchiseName: string,
    clubName: string,
    active: boolean
}
