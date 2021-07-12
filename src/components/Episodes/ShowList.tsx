import show_list from "../../show_list.json";
import { ShowListProps } from "../../utils/Interfaces";

function ShowList({ setSelectedShow }: ShowListProps): JSX.Element {
  return (
    <>
      <label>Choose a show: </label>
      <select onChange={(event) => setSelectedShow(event.target.value)}>
        {show_list
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((show) => (
            <option value={show.id} key={show.id}>
              {show.name}
            </option>
          ))}
      </select>
    </>
  );
}

export default ShowList;
