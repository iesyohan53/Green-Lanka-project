import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Corrected import
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers';
import { productsReducer, newProductReducer, productReducer, productDetailsReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers';
import { allOrdersReducer, orderReducer } from './reducers/orderReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    cart: cartReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
    }
};

const middleware = [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: composeWithDevTools(),
    preloadedState: initialState,
});

export default store;
