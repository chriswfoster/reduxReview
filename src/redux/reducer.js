//import axios here if necessary

//Constants
const ADD_NUMBER = "ADD_NUMBER"

//Initial state
let initialState = {
  numbersAdded: 0
}

//REDUCER
//this is exported so it can be imported into our store.
export default function(state = initialState, action) {
  //can reference state now with state.item
  switch (action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, { numbersAdded: action.payload })
    default:
      return state
  }
}

//Action Creator
export function addNumbers(first, second) {
  console.log(first, second)
  return {
    type: ADD_NUMBER,
    payload: first + second
  }
}
