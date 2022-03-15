import { PeopleResults } from "./people-results";

export interface SearchResults {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    media_type: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    gender?: number;
    known_for?: PeopleResults[];
    known_for_department?: string;
    name?: string;
    profile_path?: string;
    first_air_date?: string;
    origin_country?: string[];
    original_name?: string;
}