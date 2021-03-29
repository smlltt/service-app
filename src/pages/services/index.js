import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesActions, servicesOperations } from "../../redux/services";
import { servicesSelectors } from "../../redux/services";
import { MainSpinner } from "../../sharedStyles";

const ServicesPage = () => {
  const count = useSelector(servicesSelectors.count);
  const services = useSelector(servicesSelectors.services);
  const isLoading = useSelector(servicesSelectors.isLoading);
  const dispatch = useDispatch();

  const operationsTest = () => {
    dispatch(servicesOperations.fetchServices());
  };

  const mappedServices = services.map((service) => (
    <>
      <li>{service.title}</li>
      <li>{service.description}</li>
    </>
  ));

  return (
    <div>
      <div>
        <button onClick={operationsTest}>test</button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(servicesActions.increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(servicesActions.decrement())}
        >
          Decrement
        </button>

        <ul>
          {isLoading && <MainSpinner />}
          {mappedServices}
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
