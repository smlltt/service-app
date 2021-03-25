import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { ArrowBack } from "@material-ui/icons";

export const DarkMenuIcon = styled(MenuIcon)`
  && {
    color: #303030;
  }
`;

export const DarkBackGround = styled.div`
  && {
    color: white;
    background-color: #303030;
    flex-grow: 2;
  }
`;

export const LightArrowBack = styled(ArrowBack)`
  && {
    color: white;
  }
`;
