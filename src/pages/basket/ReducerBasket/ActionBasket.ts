import {ReducerBasket} from "./BasketSlice";
import {AppDispatch} from "../../../redux/Store";

export const addToBasket =  (product: any) => async(dispatch: AppDispatch) =>{
  // let basket = JSON.parse(localStorage.getItem('basket') as any) || []
  // basket = [...basket, product]
  // localStorage.setItem('basket', JSON.stringify(basket))
  await dispatch(ReducerBasket.actions.basketSuccess(product))
}

