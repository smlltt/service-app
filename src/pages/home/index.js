import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { servicesOperations } from "../../redux/services";
import HomePageComponent from "./home.components";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(servicesOperations.fetchServices());
  }, []);

  return <HomePageComponent />;
};

export default HomePage;
