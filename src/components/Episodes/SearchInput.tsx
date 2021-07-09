import { useContext } from "react";
import SearchEpisodes from "../../utils/searchEpisodes";
// import { SearchInputProps } from "../utils/Interfaces";
import { EpisodesContext } from "../Episodes/Episodes";

interface SearchInputProps {
  search: string;
  setSearch(search: string): void;
}

//just responsible for maintaining the count
function SearchInput({ search, setSearch }: SearchInputProps): JSX.Element {
  const showEpisodes = SearchEpisodes({ search });

  return (
    <div>
      Search: <input onChange={(event) => setSearch(event.target.value)} />
      Displaying {showEpisodes.length}/{useContext(EpisodesContext).length}{" "}
      episodes
    </div>
  );
}

export default SearchInput;