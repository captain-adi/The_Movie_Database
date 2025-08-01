export interface IGeneres {
  id: number;
  name: string;
}
export interface IProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
export interface IProductionCountry {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}
export interface ISpokenLanguage {
    iso_639_1: string;
    name: string;
}

export interface IDetailType {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: IGeneres[];
  homepage: string | null;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined | null;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
