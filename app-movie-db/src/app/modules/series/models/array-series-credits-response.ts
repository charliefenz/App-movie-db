import { Crew } from '../../movies-and-series/models/crew';
import { SeriesCast } from './serie-cast';

export interface ArraySeriesCreditsResponse {
    cast: SeriesCast[];
    crew: Crew[];
    id: number;
}
