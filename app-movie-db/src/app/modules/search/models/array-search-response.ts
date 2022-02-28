import { SearchResponse } from "./search-response";

export interface ArraySearchResponse {
    page: number;
    results: SearchResponse[];
    total_pages: number;
    total_results: number;
}


