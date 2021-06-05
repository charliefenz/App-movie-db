import { MovieCast } from './movie-cast';
import { Crew } from '../../movies-and-series/models/crew';

export interface ArrayMovieCreditsResponse {
    id: number;
    cast: MovieCast[];
    crew: Crew[];
}

