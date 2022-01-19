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

  const size = circular ? 1 : 4;

  const classButton = `${circular ? "circularButton" : "normalButton"}`;

  return (
    <Grid
      onClick={() => handleClick(addElement, removeElement, id)}
      item
      xs={size}
      sm={size}
      md={size}
    >
      {/* <Button
        fullWidth={circular ? false : true}
        cssClass={circular ? "circularButton" : ""}
        variant={selected ? "contained" : "outlined"}
        size="large"
      >
        {text}
      </Button> */}
      <MyButton
        cssClass={classButton}
        circular={circular}
        text={text}
        selected={selected}
      />
    </Grid>
  );
};
