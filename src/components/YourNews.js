import "../App.css";
import { Title, TitlePage } from "./Title";
import { Stack } from "@mui/material";
import { MyCard } from "./MyCard";
import { MyCardWithImage } from "./MyCardWithImage";
import news from "../data/news.json";
import { interests } from "./Util";

export const YourNews = () => {
  const newsCategoriesIds = [...new Set(news.map((n) => n.interest.id))];

  console.log(newsCategoriesIds);

  return (
    <div className="yourNews">
      <TitlePage text={"Your news"} />
      {newsCategoriesIds.map((categoryId) => (
        <Stack
          sx={{ overflowX: "auto" }}
          className="newsContainer"
          auto
          direction="row"
          spacing={2}
          key={categoryId}
        >
          {news
            .filter((n) => n.interest.id === categoryId)
            .map((n) => (
              <MyCard
                title={n.title}
                category={interests.find((i) => i.id === categoryId).name}
                newspaper={n.newspaper}
                key={n.id}
              />
            ))}
        </Stack>
      ))}
      <Title
        text={"Your favourite newspaper"}
        sx={{ fontSize: "2rem", fontFamily: "Roboto", fontWeight: 500 }}
      ></Title>
      <Stack
        sx={{ overflowX: "auto" }}
        className="newsContainer"
        auto
        direction="row"
        spacing={2}
      >
        <MyCardWithImage newspaper={"The Mirror"} image_name={"the_mirror"} />
        <MyCardWithImage
          newspaper={"The Guardian"}
          image_name={"the_guardian"}
        />
        <MyCardWithImage newspaper={"Le Monde"} image_name={"le_monde"} />
        <MyCardWithImage
          newspaper={"New York Times"}
          image_name={"new_york_times"}
        />
      </Stack>
    </div>
  );
};
