import { MovieCast } from './movie-cast';
import { Crew } from '../../../common/models/crew';

export interface ArrayMovieCreditsResponse {
    id: number;
    cast: MovieCast[];
    crew: Crew[];
}

