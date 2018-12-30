import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import movieReducer from './movieReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer'

const reducers = combineReducers({
    categoryReducer,
    movieReducer,
    productReducer,
    orderReducer
})

export default reducers