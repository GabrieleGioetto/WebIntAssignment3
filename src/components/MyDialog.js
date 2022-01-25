import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function MyDialog({ open, title, setOpen }) {
  //   const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  console.log(title);

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
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
      <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{`${title}`}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            dicta ab placeat, velit quod laudantium, optio possimus laborum quae
            voluptatem nemo mollitia assumenda eum aperiam qui corporis. Alias,
            ratione atque? Quos consequuntur qui explicabo culpa aliquid dolorem
            labore cupiditate perferendis ducimus maxime mollitia, quam cumque
            recusandae veniam eos fugit aut soluta quo repellat, deleniti fuga
            quidem? Quas minima ad iure. Vitae quidem illum nulla omnis sapiente
            natus, ipsam voluptas tempore doloribus ullam, accusantium vel
            eaque, nesciunt sed nihil explicabo esse facilis velit cum deserunt
            iste inventore porro dicta. Praesentium, iste. Quos illum magnam
            nobis accusantium exercitationem vel magni pariatur voluptas ex
            enim. Cumque quibusdam ab, necessitatibus labore sit quisquam
            explicabo et mollitia est, esse veniam, porro excepturi nostrum
            perferendis facere! Quasi mollitia ex dicta asperiores soluta illo
            et doloremque sint tempora. Debitis, ut vero dolorem ipsam eum
            omnis, maiores et nulla laborum mollitia, quasi cum neque fugit
            commodi ducimus! At! Enim voluptates, magni consequatur alias
            assumenda cumque doloribus dolorem aspernatur eveniet, totam
            asperiores quisquam fuga. Omnis nemo eaque, quisquam eum assumenda
            molestias quae odio harum et vel debitis asperiores! Aperiam!
            Quisquam amet qui pariatur minima veniam consequatur autem dolor
            perspiciatis consequuntur, totam eius esse optio error et, dicta
            eaque iure recusandae. Velit architecto error, animi illo ipsam
            optio qui porro! Vero voluptatem veniam animi suscipit deleniti
            consectetur, ducimus illum in iure corrupti minima nulla praesentium
            voluptatibus pariatur vitae soluta? Vel cupiditate dignissimos iste
            suscipit magni exercitationem at impedit iure aperiam. Minus quos
            incidunt doloremque praesentium non, voluptatibus asperiores
            impedit, laudantium illum commodi laborum aperiam similique quidem
            quia, corporis laboriosam a dignissimos suscipit perspiciatis vitae.
            Quae officia sequi voluptatum neque aliquam. Quaerat, recusandae!
            Tempora sit quasi esse, repellendus voluptatibus, molestias aliquid
            modi molestiae necessitatibus tempore temporibus quis excepturi
            dicta quidem magnam libero similique provident quos possimus
            expedita animi reiciendis consequatur omnis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
