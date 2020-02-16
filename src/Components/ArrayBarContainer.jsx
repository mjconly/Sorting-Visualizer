import React from "react";
import ArrayBar from "./ArrayBar"
import "./arrayBarContainer.css"
import { mergeHelper } from "../sortingAlgorithms/mergeSort"
import { inPlaceHelper } from "../sortingAlgorithms/mergeSortInPlace"
import { bubbleHelper } from "../sortingAlgorithms/bubbleSort"


//constants for number of bars per algorithm
const MERGE = 500;
const INPLACE = 150;
const BUBBLE = 150;

class ArrayBarContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bars: [],
      isRunning: false,
    }
  }

  componentDidMount(){
    this.resetArray();
  }


  async resetArray(size=500){
    try{
      this.isRunning();

      const values = []
      for(let i = 0; i < size; i++){
        values.push(Math.floor(Math.random() * (500 - 10 + 1) + 10))
      }
      const barArray = values.map((val, idx) => {
        return (
          <ArrayBar value={val} key={idx}/>
        )
      })
      this.setState({
        bars: barArray,
        isRunning: false
      })

    }
    catch(e){
      console.log(e);
    }
  }

  startRunning() {
    this.setState({
      isRunning: true
    })
  }

  isRunning(){
    if(this.state.isRunning){
      throw "Interuppting Algorithm in Progress!"
    }
  }

  stopRunning(){
    this.setState({
      isRunning: false,
    })
  }


//################################## Algorithm Calls #########################
  async mergeAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    this.startRunning();
    let arrDOM = getBars();
    await mergeHelper(arrDOM)
    return 1;
  }

  async mergeInPlaceAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(INPLACE);
    this.startRunning();
    let arrDOM = getBars();
    await inPlaceHelper(arrDOM);
    return 1;
  }

  async bubbleAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(BUBBLE)
    this.startRunning();
    let arrDOM = getBars();
    await bubbleHelper(arrDOM);
    return 1
  }
//#############################################################################

//promise fucntion for async animate
  finished (status, val){
    if (status === -1){
      return
    }
    getButtons(val);
    this.stopRunning();
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
          <button className="abtn"
            onClick={() => this.mergeAnimate().then((res) => this.finished(res, 1))}
            >
            Merge Sort
          </button>
          <button className="abtn"
            onClick={() => this.mergeInPlaceAnimate().then((res) => this.finished(res, 1))}
            >
            Merge Sort In Place
          </button>
          <button className="abtn"
            onClick={() => this.bubbleAnimate().then((res) => this.finished(res, 1))}
            >
            Bubble Sort
          </button>
        </div>
      </div>
    )
  }
}

const getBars = () => {
  const barsDOM = document.getElementsByClassName('array-bar')
  const arrDOM = [];
  for (let i = 0; i < barsDOM.length; i++){
    arrDOM.push(barsDOM[i]);
  }
  return arrDOM;
}

const getButtons = (val) => {
  const buttonsDOM = document.getElementsByClassName("abtn");
  for (let i = 0; i < buttonsDOM.length; i++){
    let btn = buttonsDOM[i];
    btn.disabled = !btn.disabled;
    btn.style.opacity = `${val}`
  }
}

export default ArrayBarContainer
