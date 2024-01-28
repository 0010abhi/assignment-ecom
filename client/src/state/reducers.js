import { ADD_TO_CART } from "./action-type";
// reducers.js
const initialState = {
    cart: [],
    cartTotal: 0,
    saveForLetter: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, 
                cart: [...state.cart, action.payload],
                cartTotal: state.cartTotal + action.payload.price
            };
        default:
            return state;
    }
};

export default rootReducer;
