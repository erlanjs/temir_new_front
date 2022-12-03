import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { MessengerReducer } from "./ReduceMessengerId";

export const getActionMessengersId =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(MessengerReducer.actions.MessengerFetching);
      const response = await API(`social/${id}`);
      dispatch(MessengerReducer.actions.MessengerSuccess(response.data));
    } catch (e: any) {
      dispatch(MessengerReducer.actions.MessengerError(e.massage));
    }
  };
