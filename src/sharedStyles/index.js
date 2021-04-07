import styled from "styled-components";
import * as formsStyles from "./forms";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export { formsStyles };

export const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AlignedFlexCenterWrapper = styled(FlexCenterWrapper)`
  align-self: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MainButton = styled(Button)`
  && {
    background: #ff1493;
  }
`;

export const MainButtonTypography = styled(Typography)({
  color: "white",
});

export const DarkColor = styled.div`
   {
    color: black;
  }
`;

export const MainSpinner = styled(CircularProgress)({
  color: "#ff1493",
});

export const MarginTopHalfRem = styled(Box)`
  && {
    margin-top: 0.5rem;
  }
`;

export const LinkNoDecoration = styled(Link)`
  text-decoration: none;
`;
