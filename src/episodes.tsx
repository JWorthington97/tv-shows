import episodes from "./clarksons_farm.json";

interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

function ShowEpisode(ep: IEpisode): JSX.Element {
  return (
    <div className="episode">
      <img className="episodeImage" src={ep.image.original} alt=""></img>
      <div className="episodeInfo">
        <h1 className="title">
          {ep.name} - S{0 * (2 - ep.season.toString().length)}
          {ep.season}E{0 * (2 - ep.number.toString().length)}
          {ep.number}
        </h1>
        <p className="summary">
          {ep.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")}
        </p>
      </div>
    </div>
  );
}

function GetEpisodes(): JSX.Element {
  return (
    <div className="episodes">
      {episodes.map((ep) => (
        <ShowEpisode
          key={ep.id}
          id={ep.id}
          url={ep.url}
          name={ep.name}
          season={ep.season}
          number={ep.number}
          type={ep.type}
          airdate={ep.airdate}
          airtime={ep.airtime}
          airstamp={ep.airstamp}
          runtime={ep.runtime}
          image={ep.image}
          summary={ep.summary}
          _links={ep._links}
        />
      ))}
    </div>
  );
}

export default GetEpisodes;
