import "../App.css";
import { useState } from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";
import { days, interests, formats } from "./Util";

function useSelectedElements(lista) {
  const [selectedElements, setSelectedElements] = useState([]);

  const addElement = (id) => {
    setSelectedElements([
      ...selectedElements,
      ...lista.filter((element) => element.id === id),
    ]);
  };

  const removeElement = (id) => {
    setSelectedElements(
      selectedElements.filter((element) => element.id !== id)
    );
  };

  return [addElement, removeElement];
}

export const Home = () => {
  const [addDay, removeDay] = useSelectedElements(days);
  const [addInterest, removeInterest] = useSelectedElements(interests);
  const [addFormat, removeFormat] = useSelectedElements(formats);

  //   const [selectedInterests, setSelectedInterests] = useState([]);
  //   const [selectedFormats, setSelectedFormats] = useState([]);

  //   const addInterest = (interestId) => {
  //     setSelectedInterests([
  //       ...selectedInterests,
  //       ...interests.filter((interest) => interest.id === interestId),
  //     ]);
  //   };

  //   const removeInterest = (interestId) => {
  //     setSelectedInterests(
  //       selectedInterests.filter((interest) => interest.id !== interestId)
  //     );
  //   };

  //   const addFormat = (formatId) => {
  //     setSelectedFormats([
  //       ...selectedFormats,
  //       ...formats.filter((format) => format.id === formatId),
  //     ]);
  //   };

  //   const removeFormat = (formatId) => {
  //     setSelectedFormats(
  //       selectedFormats.filter((format) => format.id !== formatId)
  //     );
  //   };

  //   const addDay = (formatId) => {
  //     setSelectedFormats([
  //       ...selectedFormats,
  //       ...formats.filter((format) => format.id === formatId),
  //     ]);
  //   };

  //   const removeFormat = (formatId) => {
  //     setSelectedFormats(
  //       selectedFormats.filter((format) => format.id !== formatId)
  //     );
  //   };

  return (
    <>
      <Typography variant="h3">Pick your interest!</Typography>
      <Grid
        container
        rowSpacing={1}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {interests.map((interest) => (
          <Element
            addElement={addInterest}
            removeElement={removeInterest}
            key={interest.id}
            id={interest.id}
            text={interest.name}
          />
        ))}
      </Grid>
      <Typography variant="h3">Choose the formats</Typography>
      <Grid
        container
        rowSpacing={1}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {formats.map((format) => (
          <Element
            addElement={addFormat}
            removeElement={removeFormat}
            key={format.id}
            id={format.id}
            text={format.name}
          />
        ))}
      </Grid>

      <Typography variant="h3">
        Which days of the week do you want to receive the news?
      </Typography>
      <Grid
        container
        rowSpacing={1}
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 7, md: 7 }}
      >
        {days.map((day) => (
          <Element
            circular={true}
            addElement={addDay}
            removeElement={removeDay}
            key={day.id}
            id={day.id}
            text={day.name}
          />
        ))}
      </Grid>
    </>
  );
};

const Element = ({ circular = false, addElement, removeElement, text, id }) => {
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

  return (
    <Grid
      onClick={() => handleClick(addElement, removeElement, id)}
      item
      xs={circular ? 1 : 4}
      sm={circular ? 1 : 4}
      md={circular ? 1 : 4}
    >
      <Button
        fullWidth={circular ? false : true}
        cssClass={circular ? "circularButton" : ""}
        variant={selected ? "contained" : "outlined"}
        size="large"
      >
        {text}
      </Button>
    </Grid>
  );
};
