import { createStore } from 'redux'

//#2 create reducer
const initialState = {
    counter: 0,    
}
function counter(state = initialState, action) {
    if(action.type == "INC"){
        // return state.counter + action.payload
        return {...state, counter: state.counter + action.payload}
    }
    if(action.type == "DEC"){
        return state.counter - 1
    }
    return state
}

//#1 create store
const store = createStore(counter)
// store.subscribe(()=> {
//     console.log(store.getState())
// })

//#3. create actions
// store.dispatch({type: 'INC', payload: 6})
// store.dispatch({type: 'INC', payload: 3})
// store.dispatch({type: 'DEC'})

export default store