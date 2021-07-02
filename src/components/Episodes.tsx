import SearchInput from "./SearchInput";
import GetEpisodes from "./GetEpisodes";
import { useState } from "react";

function Episodes(): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchInput search={search} setSearch={setSearch} />
      <hr />
      <GetEpisodes search={search} />
    </>
  );
}

export default Episodes;
