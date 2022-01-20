import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import TheGuardianLogo from "./../images/the_guardian.png";
import LeMondeLogo from "./../images/le_monde.png";
import NewYorkTimesLogo from "./../images/new_york_times.png";
import TheMirrorLogo from "./../images/the_mirror.png";

const card = (image_name) => {
  const logos = {
    the_guardian: TheGuardianLogo,
    le_monde: LeMondeLogo,
    new_york_times: NewYorkTimesLogo,
    the_mirror: TheMirrorLogo,
  };

  const img = logos[image_name];
  return (
    <CardActionArea>
      <CardMedia component="img" height="140" image={img} alt="Newspaper" />
      <CardContent />
    </CardActionArea>
  );
};

export function MyCardWithImage({ image_name }) {
  return (
    <Box>
      <Card sx={{ width: 200 }} variant="outlined">
        {card(image_name)}
      </Card>
    </Box>
  );
}
