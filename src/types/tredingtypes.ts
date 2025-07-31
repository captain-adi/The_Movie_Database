export interface ITredingTypes{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number; 
    title : string;
    original_language: string;
    original_title: string;
    overview: string;
    media_type?: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
    original_name?: string;
    first_air_date?: string;
    origin_country?: string[];

    [key: string]: any; // To allow additional properties

}
export interface ITrendingResponse {
  page: number;
  results: ITredingTypes[];
  total_pages: number;
  total_results: number;
}