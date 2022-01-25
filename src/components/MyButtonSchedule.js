import * as React from "react";
import "../App.css";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const black = {
  500: "#1f1e1c",
  600: "#000000",
  700: "#000000",
};

const CustomButtonRoot = styled("button")`
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${black[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 50ms ease;
  cursor: pointer;
  border: none;
  width: 100%;
  margin: 0 1em 0 1em;

  &:hover {
    background-color: ${black[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${black[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton({ ...props }) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export const MyButtonSchedule = ({ text, ...props }) => (
  <CustomButton {...props}>{text}</CustomButton>
);
