import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import news from "../data/news.json";
import { MyCard } from "./MyCard";

export default function MyDialogNewspaper({ open, newspaper, setOpen }) {
  //   const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  console.log(newspaper);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{`${newspaper}`}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Stack
            sx={{ overflowX: "auto" }}
            className="newsContainer"
            auto
            direction="row"
            spacing={2}
          >
            {news
              .filter((n) => n.newspaper === newspaper)
              .map((n) => (
                <MyCard
                  title={n.title}
                  category={n.interest.name}
                  newspaper={n.newspaper}
                  key={n.id}
                />
              ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
