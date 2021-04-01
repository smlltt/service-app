import React from "react";
import { PageWrapper, ServicesWrapper } from "./styles";
import ServiceItem from "../../components/service";
import { FlexCenterWrapper, MainSpinner } from "../../sharedStyles";
import Fade from "react-reveal/Fade";
import Hero from "../../components/hero";
import { useSelector } from "react-redux";
import { servicesSelectors } from "../../redux/services";

const HomePageComponent = () => {
  const services = useSelector(servicesSelectors.services);
  const isLoading = useSelector(servicesSelectors.isLoading);

  const mappedServices = services.map((service) => (
    <ServiceItem key={service.id} service={service} />
  ));

  return (
    <PageWrapper>
      <Hero />
      <ServicesWrapper>
        <Fade left>
          <FlexCenterWrapper>
            {isLoading && <MainSpinner />}
            {mappedServices}
          </FlexCenterWrapper>
        </Fade>
      </ServicesWrapper>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/monkik" title="monkik">
          monkik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </PageWrapper>
  );
};

export default HomePageComponent;
