import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { serviceOperations, serviceSelectors } from "../../redux/service";
import { useDispatch, useSelector } from "react-redux";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { MainButton, MainButtonTypography } from "../../sharedStyles";
import { DetailCard } from "./styles";

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector(serviceSelectors.service);

  useEffect(() => {
    dispatch(serviceOperations.fetchServiceById(id));
  }, []);

  const renderedService = (
    <DetailCard>
      <CardMedia
        image={service.image}
        title="service"
        style={{ width: "25rem", height: "20rem" }}
      />

      <CardContent>
        <Typography>{service.title}</Typography>
        <Typography>{service.description}</Typography>
        <MainButton>
          <MainButtonTypography>Learn More</MainButtonTypography>
        </MainButton>
      </CardContent>
    </DetailCard>
  );

  return (
    <div
      style={{
        marginTop: "5rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {renderedService}
    </div>
  );
};

export default ServiceDetails;
