const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

export default function orderReducer(state=initialState, action){
    switch (action.type){        
        case "ALL_ORDER_PENDING":
            return {...state, isLoading: true}       
        case "ALL_ORDER_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}       
        case "ALL_ORDER_REJECTED":
            return {...state, isLoading: false, isError: true}             
        default:
            return state
    }
}
