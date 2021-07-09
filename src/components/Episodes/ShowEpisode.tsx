import { formatSeasonEpisode } from "../../utils/formatSeasonEpisode";
import { ShowEpisodeProps } from "../../utils/Interfaces";

function ShowEpisode({ episode }: ShowEpisodeProps): JSX.Element {
  return (
    <div className="episode" id={episode.id.toString()}>
      <img className="episodeImage" src={episode.image?.original} alt=""></img>
      <div className="episodeInfo">
        <h3 className="title">{episode.name}</h3>
        {formatSeasonEpisode(episode.season, episode.number)}
        <p className="summary">
          {episode.summary?.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </p>
      </div>
    </div>
  );
}

export default ShowEpisode;
