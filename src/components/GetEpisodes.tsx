import SearchEpisodes from "../utils/searchEpisodes";
import { ShowEpisodeProps, GetEpisodesProps } from "../utils/Interfaces";

export function ShowEpisode({ episode }: ShowEpisodeProps): JSX.Element {
  return (
    <div className="episode">
      <img className="episodeImage" src={episode.image.original} alt=""></img>
      <div className="episodeInfo">
        <h3 className="title">{episode.name}</h3>S
        {0 * (2 - episode.season.toString().length)}
        {episode.season}E{0 * (2 - episode.number.toString().length)}
        {episode.number}
        <p className="summary">
          {episode.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </p>
      </div>
    </div>
  );
}

function GetEpisodes({ search }: GetEpisodesProps): JSX.Element {
  const showEpisodes = SearchEpisodes(search);
  return (
    <div className="episodes">
      {showEpisodes.map((episode) => (
        <ShowEpisode key={episode.id} episode={episode} /> // the key you do after the dot
      ))}
    </div>
  );
}

export default GetEpisodes;
