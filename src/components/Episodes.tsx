import SelectInput from "./SelectInput";
import SearchInput from "./SearchInput";
import GetEpisodes from "./GetEpisodes";
import { useState } from "react";
 
function Episodes(): JSX.Element {
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("")
  console.log(selectedEpisode)

  return (
    <>
      <SelectInput selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode}/>
      <hr />
      <SearchInput search={search} setSearch={setSearch} />
      <hr />
      <GetEpisodes search={search} dropdown={selectedEpisode}/>
    </>
  );
}

export default Episodes;
