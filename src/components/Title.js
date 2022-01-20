import { Typography } from "@mui/material";

export const Title = ({ text, variant = "h6" }) => {
  return <Typography variant={variant}>{text}</Typography>;
};
