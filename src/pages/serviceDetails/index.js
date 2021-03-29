import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  //cred un nuovo reducer relativo a service
  //li avro' get, add, change?, delete (CRUD)??? per ora solo get

  // useEffect(() => {
  //   dispatch(serviceOperations.fetchServiceById(id));
  // }, []);

  //poi lo mostro qui sotto

  return <div>{`service details id: ${id}`}</div>;
};

export default ServiceDetails;
