import { Crew } from '../../../common/models/crew';
import { SeriesCast } from './serie-cast';

export interface ArraySeriesCreditsResponse {
    cast: SeriesCast[];
    crew: Crew[];
    id: number;
}
