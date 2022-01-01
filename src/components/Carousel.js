import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Caroules = props => (
  <AutoplaySlider
    play
    cancelOnInteraction={false}
    interval={10000}
    cssModule={AwesomeSliderStyles}
    transitionDelay={100}
    buttons={false}
    bullets={false}
    className="caroules"
    {...props}
  ></AutoplaySlider>
);

export default Caroules;
