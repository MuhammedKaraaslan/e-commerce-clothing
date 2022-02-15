import { TOGGLE_CART_HIDDEN } from "./cartAction";
import { ADD_ITEM } from "./cartAction";
import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return INITIAL_STATE;
    }
}

export default cartReducer;