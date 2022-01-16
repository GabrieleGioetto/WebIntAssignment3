import * as React from "react";
import "../App.css";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const pink = {
  500: "#F7EEEE",
  600: "#e3d5d5",
  700: "#cfc0c0",
};

const CustomButtonRoot = styled("button")`
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${pink[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 100%;
  margin: 0 1em 0 1em;

  &:hover {
    background-color: ${pink[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${pink[700]};
  }

  .circularButton {
    width: 50%;
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

const CustomButtonRootCircular = styled("button")`
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${pink[500]};
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  margin: 0 1em 0 1em;
  padding: 12px 12px;

  &:hover {
    background-color: ${pink[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${pink[700]};
  }

  .circularButton {
    width: 50%;
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

function CustomButton({ circular, ...props }) {
  return circular ? (
    <ButtonUnstyled {...props} component={CustomButtonRootCircular} />
  ) : (
    <ButtonUnstyled {...props} component={CustomButtonRoot} />
  );
}

export const MyButton = ({ text, circular, ...props }) => {
  console.log(props);
  return <CustomButton circular={circular}>{text}</CustomButton>;
};
