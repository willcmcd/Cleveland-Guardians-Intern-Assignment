
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