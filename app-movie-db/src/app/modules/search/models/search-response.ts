import { SearchResults } from "./search-results";

export interface SearchResponse {
    page: number;
    results: SearchResults[];
    total_pages: number;
    total_results: number;
}


