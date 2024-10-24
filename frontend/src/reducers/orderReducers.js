import {
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_RESET,
    DELETE_ORDER_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

export const allOrdersReducer = (state = {orders:[]},action) =>{
    switch (action.type){
        
        case ALL_ORDERS_REQUEST:
            return{
                loading: true
            }
        
        case ALL_ORDERS_SUCCESS:
            return{
                loading: false,
                orders: action.payload.orders,
                totalAmount: action.payload.totalAmount
            }

        case ALL_ORDERS_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state;
    }
}

export const orderReducer = (state = {} , action) => {

    switch(action.type){

        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return{
                ...state,
                loading:true
            }
    
        case UPDATE_ORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated:action.payload
            }
        
        case DELETE_ORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                isDeleted:action.payload
            }

        case UPDATE_ORDER_FAIL:
        case DELETE_ORDER_FAIL:
            return{
                ...state,
                error:action.payload
            }

        case UPDATE_ORDER_RESET:
            return{
                ...state,
                isUpdated: false
            }

        case DELETE_ORDER_RESET:
            return{
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        

        default:
            return state
    }
}