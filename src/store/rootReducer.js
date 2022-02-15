import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import carReducer from './cart/cartReducer'
export default combineReducers({
    user: userReducer,
    cart: carReducer
});