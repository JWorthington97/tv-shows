//shouldn't do this so need to refactor
import episodes from '../clarksons_farm.json'
import { formatSeasonEpisode } from '../utils/formatSeasonEpisode'
// import { useRef } from 'react'

interface SelectedEpisode {
    selectedEpisode: string,
    setSelectedEpisode(id: string): void
}

function SelectInput({ selectedEpisode, setSelectedEpisode }: SelectedEpisode): JSX.Element {
    // const episodeRef = useRef()

    // const handleScrollToEpisode = () => {
    //     episodeRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    return <>
    <div>
    <label htmlFor="selectEpisode">Choose an episode: </label>
    <select onChange={(event) => setSelectedEpisode(event.target.value)}name="selectEpisode">
    {/* <select onChange={handleScrollToEpisode}name="selectEpisode"> */}
        <option value="" key="placeholder">Choose an episode...</option>
        {episodes.map((episode => 
            //Need to specify the value field, else the default is the HTML text
            <option value={episode.id} key={episode.id}>{formatSeasonEpisode(episode.season, episode.number)} - {episode.name}</option>
        ))}
    </select>
    <button onClick={() => setSelectedEpisode("")}>Reset Search</button>
    </div>
    
    
    </>
}

export default SelectInput