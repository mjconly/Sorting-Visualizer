import React from "react";


//react spring
import { useSpring, animated } from 'react-spring'

export default function Psuedo(props) {
  const propsStyle = useSpring(
    {
      to: {opacity: 1, marginLeft: 0, marginRight: 0},
      from:{opactiy: 0, marginLeft: -1500, marginRight: 1500},
      config:{duration:500}
    }
  )

  const outStyle = useSpring(
    {
      to:{marginLeft:1500, marginRight: -1500},
      from:{marginLeft: 0, marginRight: 0},
      config:{duration:500}
    }
  )


  const fadeIn = (data, title) => {
        return (<animated.div
          style={propsStyle}>
          <div className="card algo" id="algo">
            <h2 className="header">{title}</h2>
            <div className="pseudo">
             {data}
           </div>
         </div>
       </animated.div>)
  }


  return(
    <div>
      {props.boolCode || props.boolTitle ? fadeIn(props.data,props.title) : ""}
    </div>
  )
}
