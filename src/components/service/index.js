import React from "react";
import {
  DescriptionTypography,
  ServiceCard,
  ServiceCardMedia,
  TitleTypography,
} from "./styles";
import {
  FlexCenterWrapper,
  AlignedFlexCenterWrapper,
  MainButton,
  MainButtonTypography,
} from "../../sharedStyles";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";

const ServiceItem = ({ service }) => {
  const shortText = (text, maxLength = 80) => {
    if (!text) {
      return "";
    }
    if (text.length < maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  return (
    <ServiceCard>
      <ServiceCardMedia image={service.image} title="service" />
      <CardContent>
        <TitleTypography>
          <FlexCenterWrapper>
            <Box fontWeight="fontWeightBold">{service.title}</Box>
          </FlexCenterWrapper>
        </TitleTypography>
        <DescriptionTypography variant="body2" component="p">
          {shortText(service.description)}
        </DescriptionTypography>
        <AlignedFlexCenterWrapper>
          <MainButton size="large">
            <MainButtonTypography>Learn More</MainButtonTypography>
          </MainButton>
        </AlignedFlexCenterWrapper>
      </CardContent>
    </ServiceCard>
  );
};

export default ServiceItem;
