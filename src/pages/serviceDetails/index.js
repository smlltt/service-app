import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { serviceOperations } from "../../redux/service";
import { useDispatch } from "react-redux";
import ServiceDetailsComponent from "./serviceDetails.component";

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceOperations.fetchServiceById(id));
  }, []);

  return <ServiceDetailsComponent />;
};

export default ServiceDetails;
