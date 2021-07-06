import SearchEpisodes from "../utils/searchEpisodes";
import { ShowEpisodeProps, GetEpisodesProps } from "../utils/Interfaces";
import { formatSeasonEpisode } from '../utils/formatSeasonEpisode'
import selectedDropdownEpisode from "../utils/selectedDropdownEpisode";

export function ShowEpisode({ episode }: ShowEpisodeProps): JSX.Element {
  return (
    <div className="episode" 
    id={episode.id.toString()}
    >
      <img className="episodeImage" src={episode.image.original} alt=""></img>
      <div className="episodeInfo">
        <h3 className="title">{episode.name}</h3>
        {formatSeasonEpisode(episode.season, episode.number)}
        <p className="summary">
          {episode.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </p>
      </div>
    </div>
  );
}

function GetEpisodes({ search, dropdown }: GetEpisodesProps): JSX.Element {
  if (dropdown === "") {
    const showEpisodes = SearchEpisodes(search);
    return (
      <div className="episodes">
        {showEpisodes.map((episode) => (
          <ShowEpisode key={episode.id} episode={episode} /> // the key you do after the dot
        ))}
      </div>
      
    );
  }
  else {
    const showEpisodes = selectedDropdownEpisode(dropdown)
    return (
      <div className="episodes">
        {showEpisodes.map((episode) => (
          <ShowEpisode key={episode.id} episode={episode} /> // the key you do after the dot
        ))}
      </div>
    );
  }
}


export default GetEpisodes;
