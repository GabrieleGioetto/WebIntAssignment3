import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CardActionArea } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";

const card = (
  <CardActionArea>
    <CardContent
      sx={{
        width: 150,
        height: 120,
        wordWrap: "break-word",
      }}
    >
      <Typography variant="h6">Results of Serie A</Typography>
      <Divider></Divider>
      <Typography variant="body2">Sport</Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="Sport">
        <SportsSoccerIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </CardActionArea>
);

export function MyCard() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
