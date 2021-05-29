import { Cast } from './movie-cast';
import { Crew } from './movie-crew';

export interface ArrayMovieCreditsResponse {
    id: number;
    cast: Cast[];
    crew: Crew[];
}

