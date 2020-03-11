import React from "react";
import "./algoInfo.css"
import Pseudo from "./Psuedo"


const urlParse = "&action=parse&format=json&page=Heap_Sort&redirects=1&prop=text&formatversion=2"
const urlContent = "&action=query&format=json&prop=revisions&titles=Quick_Sort&redirects=1&formatversion=2&rvprop=content&rvslots=*"


const HEAP = [1, 2];
const MERGE = [2,3];
const BUBBLE = [0];
const INSERT = [0];
const QUICK = [0];

class AlgoInfo extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const info = this.props.data;
    let display = ""
    let code;
    let title = this.props.title;

    if (info.length !== 0){
      code = [];
      let context;

      if (title === "Quick Sort"){
        context = QUICK;
      }
      else if (title === "Merge Sort" || title === "Merge In Place Sort"){
        context = MERGE;
      }
      else if (title === "Heap Sort"){
        context = HEAP;
      }
      else if (title === "Bubble Sort"){
        context = BUBBLE;
      }
      else if (title === "Insertion Sort"){
        context = INSERT;
      }



      for (let k = 0; k < context.length; k++){
        const idx = context[k];
        let display = info[idx].textContent;

        display = display.replace(/<br\/>/gi, "<!><b><!>")
        display = display.replace(/["\n"]/gi, "<!><b><!>")
        display = display.replace(/["   "]{4}/gi, "<!><span><!>")

        let codeLine = display.split("<!>")
        let p = 0;
        for (let j = 0; j < codeLine.length; j++){
          if (codeLine[j] === "<span>"){
            code.push(<span className="tab"></span>)
          }
          else if (codeLine[j] === "<b>"){
            code.push(<br/> )
          }
          else if (codeLine[j].slice(0,2) === "//"){
            code.push(<span className="comment">{codeLine[j]}</span>);
          }
          else{
            code.push(<span key={p++} className="code">{codeLine[j]}</span>);
          }
        }
        code.push(<br/>)
        code.push(<br/>)
      }
    }
    else{
      code = ""
    }

    const boolCode = code !== "";
    const general = "Select an algorithm to visualize!"
    const header = this.props.title === "" ? general : this.props.title;
    const boolTitle = header === general;

    return (
      <div>
         <Pseudo
           key={boolCode ? this.props.aniID + 1 : this.props.aniID}
           data={code}
           title={header}
           boolCode={boolCode}
           boolTitle={boolTitle}
           ></Pseudo>
      </div>
    )
  }
}


function createMarkup(markup) {
  return {__html: markup};
}


const stylee = {

}


export default AlgoInfo
