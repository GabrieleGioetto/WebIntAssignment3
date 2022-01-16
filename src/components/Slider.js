import * as React from "react";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 10,
    label: "10 min",
  },
  {
    value: 30,
    label: "30 min",
  },
  {
    value: 60,
    label: "60 min",
  },
];

function valuetext(value) {
  return `${value} min`;
}

const DiscreteSliderMarks = () => {
  const maxValue = 60;
  return (
    <Slider
      aria-label="Select duration of news"
      defaultValue={10}
      getAriaValueText={valuetext}
      step={10}
      valueLabelDisplay="auto"
      marks={marks}
      max={maxValue}
      valueLabelFormat={(value) => `${value} min`}
    />
  );
};

export { DiscreteSliderMarks as Slider };
