import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import ArrayBarContainer from "./Components/ArrayBarContainer"

function App() {
  return (
    <div className="App col-sm-10 m-auto">
      <Helmet>
        <meta
          name="og:description"
          content="Visualize Popular Sorting Algorithms"
        />
      <meta name="og:image" content="./sortingImage.png"/>
      </Helmet>
      <ArrayBarContainer></ArrayBarContainer>
    </div>
  );
}

export default App;
