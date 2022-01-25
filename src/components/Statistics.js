import "../App.css";
import { Grid, Stack } from "@mui/material";
import { Title, TitlePage } from "./Title";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { MyCardWithImage } from "./MyCardWithImage";

export const Statistics = () => {
  const format = () => (tick) => tick;
  const ValueLabel = (props) => {
    const { text } = props;
    return <ValueAxis.Label {...props} text={`${text} min`} />;
  };

  const chartData = [
    {
      day: "Mo",
      minutes: 12,
    },
    { day: "Tu", minutes: 13 },
    { day: "We", minutes: 8 },
    { day: "Th", minutes: 11 },
    { day: "Fr", minutes: 9 },
    { day: "Sa", minutes: 15 },
    { day: "Su", minutes: 17 },
  ];

  return (
    <div className="statistics">
      <TitlePage text={"Your Statistics"} />
      <div>
        <Title text={"Your average Daily Time:"} />
        <Title text={"13 min"} />
      </div>
      <div>
        <Title text={"Your weekly progress"} />
        <Grid
          container
          rowSpacing={2}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4} />

          <Grid item xs={4} sm={4} md={4}>
            <Chart data={chartData}>
              <ArgumentAxis
                className="x_axis"
                rotated={true}
                tickFormat={format}
              />
              <ValueAxis max={50} labelComponent={ValueLabel} />

              <LineSeries
                name="Weekly progress"
                valueField="minutes"
                argumentField="day"
              />
              <Animation />
            </Chart>
          </Grid>
          <Grid item xs={4} sm={4} md={4} />
        </Grid>
      </div>
      <div>
        <Title text={"Your Favourite newspapers:"} />
        <Stack
          sx={{ overflowX: "auto" }}
          className="newsContainer"
          auto
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <MyCardWithImage image_name={"the_mirror"} />
          <MyCardWithImage image_name={"le_monde"} />
        </Stack>
      </div>
    </div>
  );
};
