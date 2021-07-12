import showList from "../../show_list.json";
import ShowShow from "./ShowShow";

function Shows(): JSX.Element {
  return (
    <>
      <div className="shows">
        {showList.map((show) => (
          <ShowShow key={show.id} show={show} />
        ))}
      </div>
    </>
  );
}

export default Shows;
