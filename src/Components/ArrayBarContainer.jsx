import React from "react";
import ArrayBar from "./ArrayBar"
import "./arrayBarContainer.css"
import { mergeHelper } from "../sortingAlgorithms/mergeSort"
import { inPlaceHelper } from "../sortingAlgorithms/mergeSortInPlace"
import { bubbleHelper } from "../sortingAlgorithms/bubbleSort"
import { insertionHelper } from "../sortingAlgorithms/insertionSort"
import { quickHelper } from "../sortingAlgorithms/quickSort"
import { heapHelper } from "../sortingAlgorithms/heapSort"


//constants for number of bars per algorithm
const MERGE = 500;
const INPLACE = 100;
const BUBBLE = 100;
const INSERTION = 100;
const QUICK = 500;
const HEAP = 100;

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
    await this.resetArray(MERGE);
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

  async insertionAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(INSERTION)
    this.startRunning();
    let arrDOM = getBars();
    await insertionHelper(arrDOM);
    return 1
  }

  async quickAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(QUICK)
    this.startRunning();
    let arrDOM = getBars();
    await quickHelper(arrDOM);
    return 1
  }

  async heapAnimate(){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(HEAP)
    this.startRunning();
    let arrDOM = getBars();
    await heapHelper(arrDOM);
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
      <div className="console">
        <div className="btn-col">
          <button className="abtn r" onClick={() => this.resetArray()}>
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
            Merge In Place
          </button>
          <button className="abtn"
            onClick={() => this.bubbleAnimate().then((res) => this.finished(res, 1))}
            >
            Bubble Sort
          </button>
          <button className="abtn"
            onClick={() => this.insertionAnimate().then((res) => this.finished(res, 1))}
            >
            Insertion Sort
          </button>
          <button className="abtn"
            onClick={() => this.quickAnimate().then((res) => this.finished(res, 1))}
            >
            Quick Sort
          </button>
          <button className="abtn"
            onClick={() => this.heapAnimate().then((res) => this.finished(res, 1))}
            >
            Heap Sort
          </button>
        </div>
        <div className="card">
          <div className="array-bar-container">
            {this.state.bars}
          </div>
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
