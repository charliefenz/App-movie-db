import { GlobalConstants } from './global-constants';

export class EndPoints {
    public static popularMovies = `${GlobalConstants.basicUrl}movie/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static topRatedMovies = `${GlobalConstants.basicUrl}movie/top_rated/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static popularSeries = `${GlobalConstants.basicUrl}tv/popular/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static movieGenres = `${GlobalConstants.basicUrl}genre/movie/list${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static movieDiscover = `${GlobalConstants.basicUrl}discover/movie`;
    public static serieDiscover = `${GlobalConstants.basicUrl}discover/tv`;
    public static movie = `${GlobalConstants.basicUrl}movie/`;
    public static serie = `${GlobalConstants.basicUrl}tv/`;
    public static topRatedSeries = `${GlobalConstants.basicUrl}tv/top_rated/${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
    public static serieGenres = `${GlobalConstants.basicUrl}genre/tv/list${GlobalConstants.apiKey}${GlobalConstants.langEs}`;
}
