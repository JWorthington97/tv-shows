import { formatSeasonEpisode } from "../utils/formatSeasonEpisode";
import { SelectedEpisode } from "../utils/Interfaces";
// import { useRef } from 'react'

function SelectInput({
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}: SelectedEpisode): JSX.Element {
  // const episodeRef = useRef()

  // const handleScrollToEpisode = () => {
  //     episodeRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <>
      <div>
        <label htmlFor="selectEpisode">Choose an episode: </label>
        <select
          onChange={(event) => setSelectedEpisode(event.target.value)}
          name="selectEpisode"
        >
          {/* <select onChange={(event) => document.getElementById(event.target.value).scrollIntoView()}name="selectEpisode"> */}
          {/* <select onChange={handleScrollToEpisode}name="selectEpisode"> */}
          <option value="" key="placeholder">
            Choose an episode...
          </option>
          {episodes.map((episode) => (
            //Need to specify the value field, else the default is the HTML text
            <option value={episode.id} key={episode.id}>
              {formatSeasonEpisode(episode.season, episode.number)} -{" "}
              {episode.name}
            </option>
          ))}
        </select>
        <button onClick={() => setSelectedEpisode("")}>Reset Search</button>
      </div>
    </>
  );
}

export default SelectInput;
