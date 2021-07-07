import show_list from "../show_list.json";
import { ShowListProps } from "../utils/Interfaces";

function ShowList({ setSelectedShowFromBigList }: ShowListProps): JSX.Element {
  return (
    <>
      <select
        onChange={(event) => setSelectedShowFromBigList(event.target.value)}
      >
        {show_list.map((show) => (
          <option value={show.id} key={show.id}>
            {show.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default ShowList;
