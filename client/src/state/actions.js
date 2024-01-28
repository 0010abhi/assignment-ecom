import { ADD_TO_CART } from "./action-type";

// actions.js
export const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data,
});
