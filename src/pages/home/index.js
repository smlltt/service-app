import React, { useEffect } from "react";
import { PageWrapper, ServicesWrapper } from "./styles";
import ServiceItem from "../../components/service";
import { FlexCenterWrapper, MainSpinner } from "../../sharedStyles";
import Fade from "react-reveal/Fade";
import Hero from "../../components/hero";
import { useSelector, useDispatch } from "react-redux";
import { servicesOperations, servicesSelectors } from "../../redux/services";

const HomePage = () => {
  const dispatch = useDispatch();
  const services = useSelector(servicesSelectors.services);
  const isLoading = useSelector(servicesSelectors.isLoading);

  useEffect(() => {
    dispatch(servicesOperations.fetchServices());
  }, []);

  const mappedServices = services.map((service) => (
    <ServiceItem key={service.id} service={service} />
  ));

  return (
    <PageWrapper>
      <Hero />
      <FlexCenterWrapper>
        <ServicesWrapper>
          <Fade left>
            <FlexCenterWrapper>
              {isLoading && <MainSpinner />}
              {mappedServices}
            </FlexCenterWrapper>
          </Fade>
        </ServicesWrapper>
      </FlexCenterWrapper>
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

export default HomePage;
