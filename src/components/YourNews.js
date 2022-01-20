import "../App.css";
import { Title } from "./Title";
import { Stack } from "@mui/material";
import { MyCard } from "./MyCard";

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
    </div>
  );
};
