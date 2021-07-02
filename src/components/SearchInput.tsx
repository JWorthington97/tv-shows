import episodes from "../clarksons_farm.json";
import SearchEpisodes from "../utils/searchEpisodes";
import { SearchInputProps } from "../utils/Interfaces";

function SearchInput({ search, setSearch }: SearchInputProps): JSX.Element {
  const showEpisodes = SearchEpisodes(search);

  return (
    <div>
      Search: <input onChange={(event) => setSearch(event.target.value)} />
      Displaying {showEpisodes.length}/{episodes.length} episodes
    </div>
  );
}

export default SearchInput;
