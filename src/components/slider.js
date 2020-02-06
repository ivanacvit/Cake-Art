/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Slide } from "react-slideshow-image"
import "../../styles/slider.css"
import Container from "../components/container"



const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  },
}

const Slider = ({slideImages=[]}) => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
    </div>
  )
}

export default Slider
