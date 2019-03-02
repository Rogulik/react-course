import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'
import { strictEqual } from 'assert';

// const incrementCount = ({incrementBy = 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// })
// const decrementCount = ({decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// })
// const restartCount = () => ({
//     type: 'RESTART',
// })

// const setCount = ({setBy = 100} = {}) => ({
//     type: 'SET',
//     setBy
// })

// const countReducer = ((state={count: 0},action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//         return {
//             count: state.count + action.incrementBy
//         }
//         case 'DECREMENT':
//         return {
//             count: state.count - action.decrementBy
//         }
//         case 'RESTART':
//         return {
//             count: 0
//         }
//         case 'SET':
//         return {
//             count: action.setBy
//         }
//     }
// })

// const store = createStore(countReducer)


// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch(incrementCount())

// store.dispatch(restartCount())

// store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch(setCount({setBy: 100}))




//SETTING UP OUR BYDGGETY REDUCERS FOR EXPENSES AND FILTERS


// store.dispatch(sortByAmount())
// store.dispatch(setTextFilter('rent'))




