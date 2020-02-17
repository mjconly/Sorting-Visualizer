import React from "react"

class Scroller extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <div className="card-title">
                <h4>Choose an algorithm to visualize the sorting technique</h4>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <div className="card-title">
                <h4>Merge Sort</h4>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <div className="card-title">
                <h4>Quick Sort</h4>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <div className="card-title">
                <h4>Heap Sort</h4>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}


export default Scroller
