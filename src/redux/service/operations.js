import { serviceActions } from "./index";
import fireApi from "../../api/firebase";

export const fetchServiceById = (id) => async (dispatch) => {
  dispatch(serviceActions.fetchingStarted());
  const service = await fireApi.getServiceById(id);
  dispatch(serviceActions.fetchServiceSuccess(service));
};
