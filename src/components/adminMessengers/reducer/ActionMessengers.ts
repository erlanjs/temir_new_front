import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { MessengersReducer } from "./ReducerMessenger";

export const getActionMessengers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(MessengersReducer.actions.MessengersFetching);
    const response = await API(`social/`);
    dispatch(
      MessengersReducer.actions.MessengersSuccess(response.data.results)
    );
  } catch (e: any) {
    dispatch(MessengersReducer.actions.MessengersError(e.massage));
  }
};
