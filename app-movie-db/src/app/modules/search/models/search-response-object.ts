import { SearchResponse } from "./search-response";

export interface SearchResponseObject {
    page: number;
    results: SearchResponse[];
    total_pages: number;
    total_results: number;
}


