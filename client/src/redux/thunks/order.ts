import axios from "axios";
import {BASE_URL} from "../../api";
import { orderActions } from "../slices/orders";
import { AppDispatch } from "../../types/types";

export function fetchOrderData(userId: string) {
  const orderUrl = `${BASE_URL}/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(orderUrl);
    const orderList = await response.data;
    dispatch(orderActions.setOrderList(orderList));
  };
}
