import { useState, useEffect } from "react";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchInput";
import GetEpisodes from "./GetEpisodes";
import { IEpisode } from "../utils/Interfaces";

function Episodes(): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");

  useEffect(() => {
    const fetchEpisodes = () => {
      fetch("https://api.tvmaze.com/shows/55352/episodes")
        .then((response) => response.json())
        .then((response) => {
          setEpisodes(response);
        });
    };
    fetchEpisodes();
  }, []);

  return (
    <>
      <SelectInput
        episodes={episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <hr />
      <SearchInput episodes={episodes} search={search} setSearch={setSearch} />
      <hr />
      <GetEpisodes
        episodes={episodes}
        search={search}
        dropdown={selectedEpisode}
      />
    </>
  );
}

export default Episodes;
