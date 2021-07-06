import SearchEpisodes from "../utils/searchEpisodes";
import { SearchInputProps } from "../utils/Interfaces";

//just responsible for maintaining the count
function SearchInput({
  episodes,
  search,
  setSearch,
}: SearchInputProps): JSX.Element {
  const showEpisodes = SearchEpisodes({ episodes, search });

  return (
    <div>
      Search: <input onChange={(event) => setSearch(event.target.value)} />
      Displaying {showEpisodes.length}/{episodes.length} episodes
    </div>
  );
}

export default SearchInput;
