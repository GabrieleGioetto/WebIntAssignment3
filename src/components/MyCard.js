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
import FeedIcon from "@mui/icons-material/Feed";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import MyDialog from "./MyDialog";

const card = (title, category, newspaper) => {
  console.log(category);
  return (
    <CardActionArea>
      <CardContent
        sx={{
          width: 150,
          height: 120,
          wordWrap: "break-word",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Divider></Divider>
        <Typography sx={{ marginTop: "0.2em" }} variant="body1">
          {category}
        </Typography>
        <Typography
          sx={{ marginTop: "0.2em", fontFamily: "Roboto", fontWeight: "bold" }}
          variant="body1"
        >
          {newspaper}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Sport">
          {category == "Sport" ? (
            <SportsSoccerIcon />
          ) : category == "Politics" ? (
            <AccountBalanceIcon />
          ) : (
            <FeedIcon />
          )}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </CardActionArea>
  );
};

export function MyCard({ title, category, newspaper }) {
  const [open, setOpen] = React.useState(false);

  console.log(title);

  return (
    <Box>
      <>
        <Card onClick={() => setOpen(true)} variant="outlined">
          {card(title, category, newspaper)}
        </Card>
        <MyDialog open={open} title={title} setOpen={setOpen} />
      </>
    </Box>
  );
}
