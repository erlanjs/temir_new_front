import { AppDispatch } from "../../../redux/Store";
import API from "../../api/Api";
import { ProductAdminReducer } from "./ReducerAdminProduct";

export const getActionProductAdmin =
  (id: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ProductAdminReducer.actions.ProductAdminFetching);
      const response = await API(`product/${id}`);
      dispatch(ProductAdminReducer.actions.ProductAdminSuccess(response.data));
    } catch (e: any) {
      dispatch(ProductAdminReducer.actions.ProductAdminError(e.massage));
    }
  };
