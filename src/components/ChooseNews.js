import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import { days, interests, formats, useSelectedElements } from "./Util";
import { TimePicker } from "./TimePicker";
import { Element } from "./Element";
import { Slider } from "./Slider";
import { Title } from "./Title";
import { MyButtonSchedule } from "./MyButtonSchedule";

export const ChooseNews = () => {
  const [addDay, removeDay] = useSelectedElements(days);
  const [addInterest, removeInterest] = useSelectedElements(interests);
  const [addFormat, removeFormat] = useSelectedElements(formats);
  const [hour, setHour] = useState(null);

  return (
    <>
      <Title text={"Pick your interest!"} />
      <Grid
        container
        rowSpacing={2}
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
      <Title text={"Choose the formats"} />

      <Grid
        container
        rowSpacing={2}
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
      <Title text={"Which days of the week do you want to receive the news?"} />
      <Grid
        container
        rowSpacing={2}
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
      <Title text={"At what time?"} />

      <Grid
        container
        rowSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          <TimePicker hour={hour} setHour={setHour} />
        </Grid>
      </Grid>

      <Title text={"Choose news duration"} />

      <Grid
        container
        rowSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4} />

        <Grid item xs={4} sm={4} md={4}>
          <Slider></Slider>
        </Grid>
        <Grid item xs={4} sm={4} md={4} />
      </Grid>

      <Grid
        container
        rowSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4} />

        <Grid item xs={4} sm={4} md={4}>
          <MyButtonSchedule text="Schedule"></MyButtonSchedule>
        </Grid>
        <Grid item xs={4} sm={4} md={4} />
      </Grid>
    </>
  );
};
