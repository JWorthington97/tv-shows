import "./App.css";
import Footer from "./components/Footer";
import { Episodes } from "./components/Episodes/Episodes";
import { useState } from "react";
import Shows from "./components/Shows/Shows";


function App(): JSX.Element {
  const [selectedShow, setSelectedShow] =  useState("")
  return (
    <>
      {/* <Shows /> */}
      <Episodes />
      <Footer />
    </>
  );
}

export default App;
