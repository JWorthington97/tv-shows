export interface IEpisode {
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
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface ShowEpisodeProps {
  episode: IEpisode;
}

export interface GetEpisodesProps {
  search: string;
  dropdown: string;
}

export interface SearchInputProps {
  search: string;
  setSearch(search: string): void;
}

export interface SelectedEpisode {
  setSelectedEpisode(id: string): void;
}

export interface SearchEpisodeProps {
  search: string;
}

export interface ShowListProps {
  setSelectedShow(id: string): void;
}

export interface DropdownEpisodeProps {
  dropdown: string;
}

export interface IShow {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  status: string;
  runtime: number | null;
  id: number;
  url: string;
  type: string;
  language: string;
  averageRuntime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
  };
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string | null;
    };
  } | null;
}

export interface ShowShowProps {
  show: IShow;
}
