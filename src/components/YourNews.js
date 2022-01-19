import "../App.css";
import { Title } from "./Title";
import { Stack } from "@mui/material";
import { MyCard } from "./MyCard";

export const YourNews = () => {
  return (
    <>
      <Stack sx={{ overflowX: "auto" }} auto direction="row" spacing={2}>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Stack>
    </>
  );
};
