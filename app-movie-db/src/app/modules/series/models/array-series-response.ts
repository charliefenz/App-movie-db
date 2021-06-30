import { SerieListResult } from './serie-list-result';

export interface ArraySeriesResponse {
    page: number;
    results: SerieListResult[];
    total_pages: number;
    total_results: number;
}
