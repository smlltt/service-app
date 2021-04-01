import React from "react";
import { serviceSelectors } from "../../redux/service";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import {
  MainButton,
  MainButtonTypography,
  MainSpinner,
} from "../../sharedStyles";
import {
  CardContentWrapper,
  ContentMargin,
  DetailCard,
  DetailCardMedia,
  DetailCardWrapper,
  TitleTypography,
} from "./styles";

const ServiceDetailsComponent = () => {
  const service = useSelector(serviceSelectors.service);
  const isLoading = useSelector(serviceSelectors.isLoading);

  const renderedService = (
    <DetailCard>
      {service.error ? (
        <Typography>{service.error}</Typography>
      ) : (
        <>
          <DetailCardMedia image={service.image} title="service" />
          <CardContentWrapper>
            <TitleTypography>{service.title}</TitleTypography>
            <Typography>{service.description}</Typography>
            <ContentMargin />
            <MainButton>
              <MainButtonTypography>Learn More</MainButtonTypography>
            </MainButton>
          </CardContentWrapper>
        </>
      )}
    </DetailCard>
  );

  return (
    <DetailCardWrapper>
      {isLoading ? <MainSpinner /> : renderedService}
    </DetailCardWrapper>
  );
};

export default ServiceDetailsComponent;
