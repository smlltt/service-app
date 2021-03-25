import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesActions } from "../../redux/services";
import { servicesSelectors } from "../../redux/services";

const ServicesPage = () => {
  const count = useSelector(servicesSelectors.count);
  const services = useSelector(servicesSelectors.services);
  const mappedServices = services.map((service) => (
    <>
      <li>{service.title}</li>
      <li>{service.description}</li>
    </>
  ));

  const dispatch = useDispatch();
  return (
    <div>
      <div>
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
        <ul>{mappedServices}</ul>
      </div>
    </div>
  );
};

export default ServicesPage;
