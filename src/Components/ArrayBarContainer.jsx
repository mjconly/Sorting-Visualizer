import React from "react";
import ArrayBar from "./ArrayBar"
import AlgoInfo from "./AlgoInfo"
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
const HEAP = 500;


//fetch and parse constants
// const urlParse = `&action=parse&format=json&page=${alg}&redirects=1&prop=text&formatversion=2`
// const urlContent = "&action=query&format=json&prop=revisions&titles=${}&redirects=1&formatversion=2&rvprop=content&rvslots=*"


class ArrayBarContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bars: [],
      isRunning: false,
      data: null,
      query: null,
      aniID: 0
    }
  }

  componentDidMount(){
    this.resetArray();
  }


  async resetArray(size=500, query){
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
        isRunning: false,
        title: query,
        data: null,
        aniID: this.state.aniID += 1
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
  async mergeAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(MERGE, "Merge Sort");
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await mergeHelper(arrDOM)
    return 1;
  }

  async mergeInPlaceAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(INPLACE, "Merge In Place Sort");
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await inPlaceHelper(arrDOM);
    return 1;
  }

  async bubbleAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(BUBBLE, "Bubble Sort")
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await bubbleHelper(arrDOM);
    return 1
  }

  async insertionAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(INSERTION, "Insertion Sort")
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await insertionHelper(arrDOM);
    return 1
  }

  async quickAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(QUICK, "Quick Sort")
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await quickHelper(arrDOM);
    return 1
  }

  async heapAnimate(alg){
    if (this.state.isRunning){
      return -1;
    }
    getButtons(0.4);
    await this.resetArray(HEAP, "Heap Sort")
    this.getData(alg)
    this.startRunning();
    let arrDOM = getBars();
    await heapHelper(arrDOM);
    return 1
  }
//#############################################################################


  //API Fetch
  async getData(alg){
    let urlParse;
    if (alg[alg.length - 1] === "X"){
      alg = "merge";
      urlParse = `&action=parse&format=json&page=${alg}_sort&redirects=1&prop=text&formatversion=2`
      alg = "Merge In Place";
    }
    else{
      urlParse = `&action=parse&format=json&page=${alg}_sort&redirects=1&prop=text&formatversion=2`
    }


    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*${urlParse}`,
      {
        method: "GET",
      }
    )
    .then(response => response.json())
    .then(result => {

      let clean = result.parse.text.replace(/class/gi, "className");

      const parser = new DOMParser();
      const htmlNodes = parser.parseFromString(clean, "text/html")
      const nodes = htmlNodes.getElementsByTagName("pre")
      const nodeArr = [];
      for (let i = 0; i < nodes.length; i++){
        nodeArr.push(nodes[i]);
      }

      const title = alg.slice(0,1).toUpperCase() + alg.slice(1, alg.length) + " Sort";

      this.setState({
        data: nodeArr,
        query: title
      })

    })
  }

//promise fucntion for async animate
  finished (status, val){
    if (status === -1){
      return
    }
    getButtons(val);
    this.stopRunning();
  }



  render(){
    const title = this.state.title == null ? "" : this.state.query;
    const data = this.state.data === null ? "" : this.state.data;


    return(
      <div>
        <div className="console">
          <div className="btn-col">
            <button className="abtn r" onClick={() => this.resetArray(500, null)}>
              Reset
            </button>
            <button className="abtn"
              onClick={() => this.mergeAnimate("merge").then((res) => this.finished(res, 1))}
              >
              Merge Sort
            </button>
            <button className="abtn"
              onClick={() => this.mergeInPlaceAnimate("mergeX").then((res) => this.finished(res, 1))}
              >
              Merge In Place
            </button>
            <button className="abtn"
              onClick={() => this.bubbleAnimate("bubble").then((res) => this.finished(res, 1))}
              >
              Bubble Sort
            </button>
            <button className="abtn"
              onClick={() => this.insertionAnimate("insertion").then((res) => this.finished(res, 1))}
              >
              Insertion Sort
            </button>
            <button className="abtn"
              onClick={() => this.quickAnimate("quick").then((res) => this.finished(res, 1))}
              >
              Quick Sort
            </button>
            <button className="abtn"
              onClick={() => this.heapAnimate("heap").then((res) => this.finished(res, 1))}
              >
              Heap Sort
            </button>
          </div>
            <div className="card main-card">
              <div className="card bards-card">
                <div className="array-bar-container">
                  {this.state.bars}
                </div>
              </div>
              <AlgoInfo
                title={title}
                data={data}
                aniID={this.state.aniID}
                ></AlgoInfo>
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
