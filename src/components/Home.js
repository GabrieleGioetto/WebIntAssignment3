import "../App.css";
import { useState } from "react";
import { Typography, Grid, Paper, Button } from "@mui/material";

export const Home = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);

  const interests = [
    {
      name: "Sport",
      id: 1,
    },
    {
      name: "Politics",
      id: 2,
    },
    {
      name: "Economy",
      id: 3,
    },
    {
      name: "Technology",
      id: 4,
    },
    {
      name: "Culture",
      id: 5,
    },
  ];

  const formats = [
    {
      id: 1,
      name: "READ",
    },
    {
      id: 2,
      name: "LISTEN",
    },
    {
      id: 3,
      name: "WATCH",
    },
  ];

  const days = [
    {
      id: 1,
      name: "Mo",
    },
    {
      id: 2,
      name: "Tu",
    },
    {
      id: 3,
      name: "We",
    },
    {
      id: 4,
      name: "Th",
    },
    {
      id: 5,
      name: "Fr",
    },
    {
      id: 6,
      name: "Su",
    },
    {
      id: 7,
      name: "Sa",
    },
  ];

  const addInterest = (interestId) => {
    setSelectedInterests([
      ...selectedInterests,
      ...interests.filter((interest) => interest.id === interestId),
    ]);
  };

  const removeInterest = (interestId) => {
    setSelectedInterests(
      selectedInterests.filter((interest) => interest.id !== interestId)
    );
  };

  const addFormat = (formatId) => {
    setSelectedFormats([
      ...selectedFormats,
      ...formats.filter((format) => format.id === formatId),
    ]);
  };

  const removeFormat = (formatId) => {
    setSelectedFormats(
      selectedFormats.filter((format) => format.id !== formatId)
    );
  };

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
      xs={4}
      sm={4}
      md={4}
    >
      {/* <Paper className="paper">{text}</Paper> */}
      <Button
        fullWidth
        cssClass={circular ? "circularButton" : ""}
        variant={selected ? "contained" : "outlined"}
        size="large"
      >
        {text}
      </Button>
    </Grid>
  );
};
