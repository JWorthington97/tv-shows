import { IEpisode, DropdownEpisodeProps } from "../utils/Interfaces";

function selectedDropdownEpisode({
  episodes,
  dropdown,
}: DropdownEpisodeProps): IEpisode[] {
  return episodes.filter((episode) => episode.id === parseInt(dropdown));
}

export default selectedDropdownEpisode;
