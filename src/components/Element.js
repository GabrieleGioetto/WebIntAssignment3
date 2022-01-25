import { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { MyButton } from "./MyButton";

export const Element = ({
  circular = false,
  addElement,
  removeElement,
  text,
  id,
}) => {
  const [selected, setSelected] = useState(false);
  const handleClick = (addElement, removeElement, id) => {
    console.log("click");
    if (!selected) {
      addElement(id);
    } else {
      removeElement(id);
    }

    setSelected(!selected);
  };

  const size = circular ? null : 4;

  return (
    <Grid
      onClick={() => handleClick(addElement, removeElement, id)}
      item
      xs={size}
      sm={size}
      md={size}
    >
      <MyButton circular={circular} text={text} selected={selected} />
    </Grid>
  );
};
