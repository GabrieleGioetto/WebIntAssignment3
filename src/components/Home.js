import "../App.css";
import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { days, interests, formats, useSelectedElements } from "./Util";
import { TimePicker } from "./TimePicker";
import { Element } from "./Element";
import { Slider } from "./Slider";

export const Home = () => {
  const [addDay, removeDay] = useSelectedElements(days);
  const [addInterest, removeInterest] = useSelectedElements(interests);
  const [addFormat, removeFormat] = useSelectedElements(formats);
  const [hour, setHour] = useState(null);

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
      <Typography variant="h3">At what time?</Typography>
      <Grid
        container
        rowSpacing={1}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          <TimePicker hour={hour} setHour={setHour} />
        </Grid>
      </Grid>
      <Typography variant="h3">Choose news duration</Typography>
      <Grid
        container
        rowSpacing={1}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4} />

        <Grid item xs={4} sm={4} md={4}>
          <Slider></Slider>
        </Grid>
        <Grid item xs={4} sm={4} md={4} />
      </Grid>
    </>
  );
};
