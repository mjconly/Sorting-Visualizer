import React from "react";
import "./algoInfo.css"
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

  // componentDidMount(){
  //   this.getData();
  // }


  // async getData(){
  //   const response = await fetch(
  //     `https://en.wikipedia.org/w/api.php?origin=*${urlParse}`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log(result)
  //     const info = this.state.info;
  //     info.push({
  //       title:result.parse.title,
  //       text:result.parse.text
  //     })
  //
  //     let clean = result.parse.text.replace(/class/gi, "className");
  //
  //     const parser = new DOMParser();
  //     const htmlNodes = parser.parseFromString(clean, "text/html")
  //     const nodes = htmlNodes.getElementsByTagName("pre")
  //     const nodeArr = [];
  //     for (let i = 0; i < nodes.length; i++){
  //       nodeArr.push(nodes[i]);
  //     }
  //
  //     console.log(nodeArr);
  //
  //     this.setState({
  //       info: nodeArr
  //     })
  //
  //   })
  // }

  render(){
    const info = this.props.data;
    let display = ""
    let code;
    let title = this.props.title;

    console.log(info);
    console.log(title)
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
            code.push(<span className="code">{codeLine[j]}</span>);
          }
        }
        code.push(<br/>)
        code.push(<br/>)
      }
    }
    else{
      code = ""
    }

    const general = "Select an algorithm to visualize!"
    const header = this.props.title === "" ? general : this.props.title;

    return (

      <div className="card">
        <h2 className="header">{header}</h2>
        <div className="pseudo">
          {code}
        </div>
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
