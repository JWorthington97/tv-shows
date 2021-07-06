import { useState, useEffect } from "react";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchInput";
import GetEpisodes from "./GetEpisodes";
import ShowList from "./ShowList";
import { IEpisode } from "../utils/Interfaces";

function Episodes(): JSX.Element {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");
  const [selectedShowFromBigList, setSelectedShowFromBigList] = useState("55352")
  // const [selectedShowFromBigList, setSelectedShowFromBigList] = useState("281")
  console.log(selectedShowFromBigList)

  useEffect(() => {
    const fetchEpisodes = (selectedShowFromBigList: string) => {
      fetch(`https://api.tvmaze.com/shows/${selectedShowFromBigList}/episodes`)
        .then((response) => response.json())
        .then((response) => {
          setEpisodes(response);
        });
    };
    fetchEpisodes(selectedShowFromBigList);
  }, [selectedShowFromBigList]);

  return (
    <>
      <ShowList setSelectedShowFromBigList={setSelectedShowFromBigList}/>
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
