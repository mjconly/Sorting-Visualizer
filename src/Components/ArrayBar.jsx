import React from "react"
import "./arrayBar.css"

class ArrayBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const ht = this.props.value;
    return (
      <div className="array-bar" style={{height: `${ht}px`}}>
      </div>
    )
  }
}

export default ArrayBar
