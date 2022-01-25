import { Typography } from "@mui/material";

export const Title = ({ text, variant = "h6", sx }) => {
  return (
    <Typography variant={variant} sx={sx}>
      {text}
    </Typography>
  );
};

export const TitlePage = ({ text, variant = "h6" }) => {
  return (
    <Typography
      sx={{ fontSize: "2.7rem", fontFamily: "Roboto", fontWeight: 700 }}
    >
      {text}
    </Typography>
  );
};

export const ComposedTitle = ({
  text1,
  text2,
  variant1 = "h6",
  variant2 = "h6",
}) => {
  return (
    <>
      <Typography
        style={{ fontWeight: 600 }}
        display="inline"
        variant={variant1}
      >
        {text1}
      </Typography>
      <Typography display="inline"> </Typography>
      <Typography
        sx={{ fontSize: "1.2rem", fontFamily: "Roboto", fontWeight: 0 }}
        display="inline"
      >
        {text2}
      </Typography>
    </>
  );
};
