import "../App.css";
import { Title } from "./Title";
import { Stack } from "@mui/material";
import { MyCard } from "./MyCard";
import { MyCardWithImage } from "./MyCardWithImage";

export const YourNews = () => {
  return (
    <div className="yourNews">
      <Stack
        sx={{ overflowX: "auto" }}
        className="newsContainer"
        auto
        direction="row"
        spacing={2}
      >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Stack>
      <Stack
        sx={{ overflowX: "auto" }}
        className="newsContainer"
        auto
        direction="row"
        spacing={2}
      >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Stack>
      <Title text={"Your favourite newspaper"} variant="h5"></Title>
      <Stack
        sx={{ overflowX: "auto" }}
        className="newsContainer"
        auto
        direction="row"
        spacing={2}
      >
        <MyCardWithImage image_name={"the_mirror"} />
        <MyCardWithImage image_name={"the_guardian"} />
        <MyCardWithImage image_name={"le_monde"} />
        <MyCardWithImage image_name={"new_york_times"} />
      </Stack>
    </div>
  );
};
