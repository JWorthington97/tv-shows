import episodes from "../clarksons_farm.json";
import { IEpisode } from "../utils/Interfaces";

function selectedDropdownEpisode(dropdown: string): IEpisode[] {
  return episodes.filter(
    (episode) =>
      episode.id === parseInt(dropdown)
  );
}

export default selectedDropdownEpisode;
