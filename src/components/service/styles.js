import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const ServiceCard = styled(Card)({
  width: "18rem",
  margin: "2rem",
  "@media (max-width: 395px)": {
    width: "15rem",
  },
  "@media (max-width: 265px)": {
    width: "12rem",
  },
});

export const ServiceCardMedia = styled(CardMedia)({
  height: "10rem",
});

export const DescriptionTypography = styled(Typography)({
  paddingBottom: "2rem",
  width: "100%",
  minHeight: "4rem",
});

export const TitleTypography = styled(Typography)({
  height: "3rem",
});
