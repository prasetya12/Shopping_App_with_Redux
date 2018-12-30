const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false   
}

export default function movieReducer(state=initialState, action){
    switch (action.type){        
        case "ALL_MOVIES_PENDING":
            return {...state, isLoading: true}       
        case "ALL_MOVIES_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}       
        case "ALL_MOVIES_REJECTED":
            return {...state, isLoading: false, isError: true}       
        case "GET_MOVIE":
            return {...state, data: action.payload}       
        default:
            return state
    }
}