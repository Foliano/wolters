export interface VideoApi {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: null;
  averageRuntime: number;
  premiered: string;
  ended: null;
  officialSite: string;
  schedule: { time: string; days: string[] };
  rating: { average: number } | null;
  weight: number;
  network: null;
  webChannel: {
    id: number;
    name: string;
    country: null;
    officialSite: string;
  };
  dvdCountry: null;
  externals: { tvrage: null; thetvdb: number; imdb: string };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: { href: string };
    previousepisode: { href: string };
  };
}
