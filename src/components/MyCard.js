import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CardActionArea } from "@mui/material";

const card = (
  <CardActionArea>
    <CardContent sx={{ width: 150, height: 150, wordWrap: "break-word" }}>
      <Typography variant="h6">Results of Serie A</Typography>
      <Divider></Divider>
    </CardContent>
  </CardActionArea>
);

export function MyCard() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
