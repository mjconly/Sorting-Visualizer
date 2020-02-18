import React from "react";
import "./algoInfo.css"
const urlParse = "&action=parse&format=json&page=Merge_Sort&redirects=1&prop=text&formatversion=2"
const urlContent = "&action=query&format=json&prop=revisions&titles=Merge_Sort&redirects=1&formatversion=2&rvprop=content&rvslots=*"

const NEW_LINE = 1;
const JOIN = 2;
const IN = 3;
const EX = 4;
const COMMENT = 5;

const TAB = "&#9"
const LF = "&#10"

class AlgoInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      info: []
    }
  }

  componentDidMount(){
    this.getData();
  }


  async getData(){
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*${urlParse}`,
      {
        method: "GET",
      }
    )
    .then(response => response.json())
    .then(result => {
      console.log(result)
      const info = this.state.info;
      info.push({
        title:result.parse.title,
        text:result.parse.text
      })

      let clean = result.parse.text.replace(/class/gi, "className");

      const parser = new DOMParser();
      const htmlNodes = parser.parseFromString(clean, "text/html")
      const nodes = htmlNodes.getElementsByTagName("pre")
      const nodeArr = [];
      for (let i = 0; i < nodes.length; i++){
        nodeArr.push(nodes[i]);
      }

      console.log(nodeArr);

      this.setState({
        info: nodeArr
      })

    })

  }

  render(){
    const info = this.state.info;
    let display = "Fetching..."
    let code;

    if (info.length !== 0){
      let display = info[0].textContent;

      display = display.replace(/( |;){2}\/\/.*(\.)*/gi, "<!>")
      display = display.replace(/<br\/>/gi, "<!><b><!>")
      display = display.replace(/["\n"]/gi, "<!><b><!>")
      display = display.replace(/["   "]{4}/gi, "<!><span><!>")

      let codeLine = display.split("<!>")
      code = [];


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
    }
    else{
      code = "Fetching..."
    }

    console.log(code);

    return (
      // <div dangerouslySetInnerHTML={createMarkup(display)}>
      // </div>
      <div className="card">
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
