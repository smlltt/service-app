import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

export const HeroCard = styled(Card)({
  border: "none",
  boxShadow: "none",
  height: "100vh",
});

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //@media (max-width: 600px) {
  //  flex-direction: column;
  //  align-items: center;
  //}
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const HeroCardMedia = styled(CardMedia)`
   {
    && {
      //width: 60%;
    }
  }
`;
