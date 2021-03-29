import { servicesActions } from "./index";
import fireApi from "../../api/firebase";

export const fetchServices = () => async (dispatch) => {
  dispatch(servicesActions.fetchingStarted());
  const services = await fireApi.getServices();
  dispatch(servicesActions.fetchServicesSuccess(services));
};
