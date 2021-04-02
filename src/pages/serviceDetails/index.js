import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { serviceOperations, serviceSelectors } from "../../redux/service";
import { useDispatch, useSelector } from "react-redux";
import ServiceDetailsComponent from "./serviceDetails.component";

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentService = useSelector(serviceSelectors.service);

  useEffect(() => {
    dispatch(serviceOperations.fetchServiceById(id, currentService.id));
  }, []);

  return <ServiceDetailsComponent />;
};

export default ServiceDetails;
