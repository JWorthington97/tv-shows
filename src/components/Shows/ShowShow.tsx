import { ShowShowProps } from "../../utils/Interfaces";
import { Episodes } from "../Episodes/Episodes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function ShowShow({ show }: ShowShowProps): JSX.Element {
    return (
      <div className="show" id={show.id.toString()}>
        <img className="showImage" src={show.image?.medium} alt=""></img>
        <div className="showInfo">
          <h3 className="title">{show.name}</h3>
     
          <p className="summary">
            {show.summary?.replace(/<p>/g, "").replace(/<\/p>/g, "").slice(0,500).trim()}{show.summary.length > 500 ? "..." : ""}
          </p>
        </div>
      </div>
    );
  }

  export default ShowShow