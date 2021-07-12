import "./App.css";
import Footer from "./components/Footer";
import { Episodes } from "./components/Episodes/Episodes";
// import { useState } from "react";
import Shows from "./components/Shows/Shows";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(): JSX.Element {
  // const [selectedShow, setSelectedShow] =  useState("")
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Without switch, this route with /:episodeId doesn't work */}
          <Route path={`/show/:episodeId`}>
            <Episodes />
          </Route>
          {/* <Route path = "/show">
          <Episodes />
        </Route> */}
          <Route path="/">
            <Shows />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
