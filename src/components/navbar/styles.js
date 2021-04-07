import styled from "styled-components";
import { MenuItem, Typography } from "@material-ui/core";

export const SignupMenuItem = styled(MenuItem)`
  && {
    background: #ff1493;
    color: white;
    //height: 100%;
  }
`;

export const OrdinaryMenuItem = styled(MenuItem)`
  && {
    color: black;
    //height: 100%;
  }
`;

export const DrawerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NavbarItemTypography = styled(Typography)`
  && {
    color: black;
  }
`;
