import {createStore} from 'redux' // using redux, not react-redux
import reducer from './redux/reducer'

const store = createStore(reducer)

export default store; //Store is used in index.js by react-redux top level provider
//We still pass data from single parent store, down to a child.

