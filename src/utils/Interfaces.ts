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
  dropdown: string
}

export interface SearchInputProps {
  search: string;
  setSearch(search: string): void;
}
