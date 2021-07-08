import { useState, useEffect, createContext } from "react";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchInput";
import GetEpisodes from "./GetEpisodes";
import ShowList from "./ShowList";
import { IEpisode } from "../utils/Interfaces";

export const EpisodesContext = createContext<IEpisode[]>([]);

export function Episodes(): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [selectedShow, setSelectedShow] = useState("55352");

  useEffect(() => {
    const fetchEpisodes = (selectedShow: string) => {
      fetch(`https://api.tvmaze.com/shows/${selectedShow}/episodes`)
        .then((response) => response.json())
        .then((jsonData) => {
          setEpisodes(jsonData);
        });
    };
    fetchEpisodes(selectedShow);
  }, [selectedShow]);

  return (
    <>
      <EpisodesContext.Provider value={episodes}>
        <ShowList setSelectedShow={setSelectedShow} />
        <hr />
        <SelectInput setSelectedEpisode={setSelectedEpisode} />
        <hr />
        <SearchInput search={search} setSearch={setSearch} />
        <hr />
        <GetEpisodes search={search} dropdown={selectedEpisode} />
      </EpisodesContext.Provider>
    </>
  );
}
