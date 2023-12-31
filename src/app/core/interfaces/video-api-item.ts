export interface VideoApiItem {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating:{
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show:{
      href: string;
    }
  };
  _embedded:{
    show:{
      id: number;
      url: string;
      name: string;
      type: string;
      language: string;
      genres: string[];
      status: string;
      runtime: number;
      averageRuntime: number;
      premiered: string;
      ended: null;
      officialSite: string;
      schedule: {
        time: string;
        days: string[];
      };
      rating:{
        average: number;
      };
      weight: number;
      network: string;
      webChannel: {
        id: number;
        name: string;
        country: {
          name: string;
          code: string;
          timezone: string;
        };
        officialSite: string;
      };
      dvdCountry: null;
      externals: {
        tvrage: null;
        thetvdb: number;
        imdb: string;
      };
      image:{
        medium: string;
        original: string;
      };
      summary: string;
      updated: number;
      _links: {
        self: {
          href: string;
        };
        previousepisode: {
          href: string;
        };
        nextepisode: {
          href: string;
        }
      }
    }
  }
}
