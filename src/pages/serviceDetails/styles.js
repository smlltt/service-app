import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { CardContent, CardMedia, Typography } from "@material-ui/core";

export const DetailCard = styled(Card)({
  display: "flex",
  "@media (max-width: 600px)": {
    maxWidth: "25rem",
    flexDirection: "column",
  },
});

export const DetailCardMedia = styled(CardMedia)({
  width: "25rem",
  height: "20rem",
  "@media (max-width: 600px)": {
    maxHeight: "15rem",
  },
});

export const DetailCardWrapper = styled.div`
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
`;

export const CardContentWrapper = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const TitleTypography = styled(Typography)({
  fontSize: "3rem",
  "@media (max-width: 600px)": {
    fontSize: "1.5rem",
  },
});

export const ContentMargin = styled.div`
  margin-top: 2rem;
`;
