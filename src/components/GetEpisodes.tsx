import { GetEpisodesProps } from "../utils/Interfaces";
import selectedDropdownEpisode from "../utils/selectedDropdownEpisode";
import SearchEpisodes from "../utils/searchEpisodes";
import ShowEpisode from "./ShowEpisode";

function GetEpisodes({
  episodes,
  search,
  dropdown,
}: GetEpisodesProps): JSX.Element {
  let showEpisodes = [];
  dropdown === ""
    ? (showEpisodes = SearchEpisodes({ episodes, search }))
    : (showEpisodes = selectedDropdownEpisode({episodes, dropdown}));
  console.log(showEpisodes)
  console.log(dropdown)
  return (
    <div className="episodes">
      {showEpisodes.map((episode) => (
        <ShowEpisode key={episode.id} episode={episode} /> // the key you do after the dot
      ))}
    </div>
  );
}

export default GetEpisodes;
