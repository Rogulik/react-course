import { createStore } from 'redux';
import Reducer from '../reducers'

const initialState = { tech: "React" }

const store = createStore(Reducer,initialState)

export default store