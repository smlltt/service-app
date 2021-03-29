import styled from "styled-components";
import { Button, CircularProgress, Typography } from "@material-ui/core";

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
