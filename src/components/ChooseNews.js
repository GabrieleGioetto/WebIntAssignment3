import "../App.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import { days, interests, formats, useSelectedElements } from "./Util";
import { TimePicker } from "./TimePicker";
import { Element } from "./Element";
import { Slider } from "./Slider";
import { Title, TitlePage } from "./Title";
import { MyButtonSchedule } from "./MyButtonSchedule";

export const ChooseNews = ({ user, setUser }) => {
  const [daySelected, addDay, removeDay] = useSelectedElements(days);
  const [interestSelected, addInterest, removeInterest] =
    useSelectedElements(interests);
  const [formatSelected, addFormat, removeFormat] =
    useSelectedElements(formats);
  const [hour, setHour] = useState(null);
  const [duration, setDuration] = useState(10);

  const handleSchedule = () => {
    /*
      {
    "id": 2,
    "name": "Gabriele",
    "surname": "Gioetto",
    "mail": "gabriele.gioetto@gmail.com",
    "interests": [3, 4],
    "format": [0],
    "days": [0, 1, 2, 3, 4, 5],
    "time": "09:20",
    "duration": "400"
  },

    */

    let updated_user = { ...user };

    updated_user["interests"] = interestSelected;
    updated_user["format"] = formatSelected;
    updated_user["days"] = daySelected;
    updated_user["time"] = hour.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    updated_user["duration"] = duration;

    console.log(updated_user);

    setUser(updated_user);
  };

  return (
    <div class="chooseNews">
      <TitlePage text={"Pick your interest!"} />
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
      <Grid container justifyContent="center" spacing={{ xs: 4, sm: 4, md: 4 }}>
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
          <Slider setDuration={setDuration}></Slider>
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
          <MyButtonSchedule
            onClick={handleSchedule}
            text="Schedule"
          ></MyButtonSchedule>
        </Grid>
        <Grid item xs={4} sm={4} md={4} />
      </Grid>
    </div>
  );
};
