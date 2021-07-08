import { IEpisode, SearchEpisodeProps } from "../utils/Interfaces";
import { useContext } from "react";
import { EpisodesContext } from "../components/Episodes";

function SearchEpisodes({ search }: SearchEpisodeProps): IEpisode[] {
  // function searchEpisodes(episodes: IEpisode[], search: string): IEpisode[] {
  return useContext(EpisodesContext).filter(
    (episode) =>
      episode.summary?.toLowerCase().includes(search.toLowerCase()) ||
      episode.name.toLowerCase().includes(search.toLowerCase())
  );
}

export default SearchEpisodes;
