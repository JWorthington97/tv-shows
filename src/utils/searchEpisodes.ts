import episodes from "../clarksons_farm.json";
import { IEpisode } from "../utils/Interfaces";

function searchEpisodes(search: string): IEpisode[] {
  return episodes.filter(
    (episode) =>
      episode.summary.toLowerCase().includes(search.toLowerCase()) ||
      episode.name.toLowerCase().includes(search.toLowerCase())
  );
}

export default searchEpisodes;
