import { GlobalConstants } from './global-constants';

export class EndPoints {
    public static popularMovies = `${GlobalConstants.basicUrl}movie/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static popularSeries = `${GlobalConstants.basicUrl}tv/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static genres = `${GlobalConstants.basicUrl}genre/movie/list${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static movie = `${GlobalConstants.basicUrl}movie/`;
}
