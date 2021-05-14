import { MovieListResult } from './movie-list-result';

export interface ArrayMoviesResponse {
    page: number;
    results: MovieListResult[];
    total_pages: number;
    total_results: number;
}



