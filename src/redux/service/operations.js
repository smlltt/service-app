import { serviceActions } from "./index";
import fireApi from "../../api/firebase";

export const fetchServiceById = (id, idInStore) => async (dispatch) => {
  if (id !== idInStore) {
    dispatch(serviceActions.fetchingStarted());
    const service = await fireApi.getServiceById(id);
    //maybe refactore: ex. if service = 'error', serviceActions.error = true
    //invece che ritorare oggetto item = {error: true}
    dispatch(serviceActions.fetchServiceSuccess(service));
  }
};
