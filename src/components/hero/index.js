import React from "react";
import { Hidden, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import TeacherSvG from "../../images/031-teacher.svg";
import { ContentWrapper, HeroCard, HeroCardMedia, HeroWrapper } from "./styles";
import { MainButton, MainButtonTypography } from "../../sharedStyles";

const Hero = () => {
  return (
    <HeroCard>
      <HeroWrapper>
        <CardContent>
          <ContentWrapper>
            <Typography variant={"h3"}>Learn, Collaborate</Typography>
            <Typography variant={"body1"}>
              Lorem ipsum sit dolor amet is a dummy text used by typography
              industry{" "}
            </Typography>
            <MainButton size="small">
              <MainButtonTypography>Get Started</MainButtonTypography>
            </MainButton>
          </ContentWrapper>
        </CardContent>
        <Hidden xsDown>
          <HeroCardMedia
            component="img"
            src={TeacherSvG}
            title="teacher image"
          />
        </Hidden>
      </HeroWrapper>
    </HeroCard>
  );
};

export default Hero;
