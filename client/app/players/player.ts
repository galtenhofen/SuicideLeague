import {IStat} from './stats';

export interface IPlayer {
        id: string
        esbid: string
        gsisPlayerId: string
        name: string
        position: string
        teamAbbr: string
        stats: IStat[]
        seasonPts: number
        seasonProjectedPts: number
        weekPts: number
        weekProjectedPts: number
        
}
