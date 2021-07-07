import { IEpisode, SearchEpisodeProps } from "../utils/Interfaces";

function searchEpisodes({ episodes, search }: SearchEpisodeProps): IEpisode[] {
  // function searchEpisodes(episodes: IEpisode[], search: string): IEpisode[] {
  return episodes.filter(
    (episode) =>
      episode.summary.toLowerCase().includes(search.toLowerCase()) ||
      episode.name.toLowerCase().includes(search.toLowerCase())
  );
}

export default searchEpisodes;
