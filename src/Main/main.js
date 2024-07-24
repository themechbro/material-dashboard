import * as React from "react";
import Deck from "./firstDeck";
import Appbar from "../Appbar/appbar";
import Graph from "./graph";
import VideoBox from "./video";

export default function Main() {
  return (
    <div>
      <Appbar />
      <div className="main  p-5">
        <Deck />
        <div className="d-flex flex-row flex-wrap p-5 justify-content-evenly">
          <Graph />
          <VideoBox />
        </div>
      </div>
    </div>
  );
}
