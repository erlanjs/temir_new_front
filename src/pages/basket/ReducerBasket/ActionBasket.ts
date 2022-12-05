import {ReducerBasket} from "./BasketSlice";
import {AppDispatch} from "../../../redux/Store";

export const addToBasket =  (product: any) => async(dispatch: AppDispatch) =>{
  await dispatch(ReducerBasket.actions.basketSuccess(product))
}

export const deleteFromBasket = (idx: any) =>async (dispatch: AppDispatch) => {
  await  dispatch(ReducerBasket.actions.basketDelete(idx))
}

export const raiseTheQuantity = (idx: any) =>async (dispatch: AppDispatch) => {
  await  dispatch(ReducerBasket.actions.PlusTheNumber(idx))
}

export const reduceTheQuantity = (idx: any) =>async (dispatch: AppDispatch) => {
  await  dispatch(ReducerBasket.actions.MinusTheNumber(idx))
}





