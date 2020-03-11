import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import ArrayBarContainer from "./Components/ArrayBarContainer"

function App() {
  return (
    <div className="App col-sm-10 m-auto">
      <helmet>
        <meta
          name="description"
          content="Visualize Popular Sorting Algorithms"
        />
      <meta name="image" content="./sortingImage.png"/>
      </helmet>
      <ArrayBarContainer></ArrayBarContainer>
    </div>
  );
}

export default App;
