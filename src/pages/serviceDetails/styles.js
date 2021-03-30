import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const DetailCard = styled(Card)({
  display: "flex",
  "@media (max-width: 600px)": {
    maxWidth: "25rem",
    flexDirection: "column",
  },
});

// export const ContentWrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media (max-width: 600px) {
//     height: 100vh;
//   }
// `;
