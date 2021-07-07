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
  episodes: IEpisode[];
  search: string;
  dropdown: string;
}

export interface SearchInputProps {
  episodes: IEpisode[];
  search: string;
  setSearch(search: string): void;
}

export interface SelectedEpisode {
  episodes: IEpisode[];
  selectedEpisode: string;
  setSelectedEpisode(id: string): void;
}

export interface SearchEpisodeProps {
  episodes: IEpisode[];
  search: string;
}

export interface ShowListProps {
  setSelectedShowFromBigList(id: string): void;
}

export interface DropdownEpisodeProps {
  dropdown: string,
  episodes: IEpisode[]
}