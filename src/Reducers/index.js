import { combineReducers } from 'redux'

const initialState = {
    counter: 0,
    todos:[]
}

const counter = (state = 1,action) => {
    switch(action.type) {
        case 'INCREMENT':
            console.log('my '+state + JSON.stringify(action))
            return state + 1
          case 'DECREMENT':
            return state - 1
          default:
            return state
    }
}


const TodoReducer = (state=[], action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TODO':
            console.log(state)
            return [
                    ...state,
                    action.data
                ]
        default:
        return state
    }
}


function todoApp(state = {}, action) {
    return {
      counter: counter(state.counter, action),
      todos: TodoReducer(state.todos, action)
    }
  }
export default todoApp