import { useContext } from "react";
import { IEpisode, DropdownEpisodeProps } from "../utils/Interfaces";
import { EpisodesContext } from "../components/Episodes";

function SelectedDropdownEpisode({
  dropdown,
}: DropdownEpisodeProps): IEpisode[] {
  const episodes2 = useContext(EpisodesContext);
  // return episodes.filter((episode) => episode.id === parseInt(dropdown));
  return episodes2.filter((episode) => episode.id === parseInt(dropdown));
}

export default SelectedDropdownEpisode;
