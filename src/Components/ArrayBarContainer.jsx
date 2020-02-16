import React from "react";
import ArrayBar from "./ArrayBar"
import "./arrayBarContainer.css"
import { mergeHelper } from "../sortingAlgorithms/mergeSort"


class ArrayBarContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bars: []
    }
  }

  componentDidMount(){
    this.resetArray();
  }

  resetArray(){
    const values = []
    for(let i = 0; i < 500; i++){
      values.push(Math.floor(Math.random() * (500 - 10 + 1) + 10))
    }
    const barArray = values.map((val, idx) => {
      return (
        <ArrayBar value={val} key={idx}/>
      )
    })
    this.setState({
      bars: barArray
    })
  }

  mergeAnimate(){
    const barsDOM = document.getElementsByClassName('array-bar')
    const arrDOM = [];
    for (let i = 0; i < barsDOM.length; i++){
      arrDOM.push(barsDOM[i]);
    }

    let bars = mergeHelper(arrDOM);
    console.log(bars);
  }

  render(){

    return(
      <div>
        <div className="array-bar-container">
          {this.state.bars}
        </div>
        <div className="btn-row">
          <button className="abtn" onClick={() => this.resetArray()}>
            Reset
          </button>
          <button className="abtn" onClick={() => this.mergeAnimate()}>
            MergeSort
          </button>
          <button className="abtn">
            QuickSort
          </button>
        </div>
      </div>
    )
  }
}

export default ArrayBarContainer
