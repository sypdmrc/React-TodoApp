import { TodoState } from "../state/TodoState";
import { ADD_TODO,DELETE_TODO,SET_TODO_FILTER,COMPLETE_TODO } from '../actionTypes/TodoActionTypes'

function todoReducer(state = TodoState, action) {
    switch (action.type) {
        case ADD_TODO:

            return { ...state, todoList: [...state.todoList, action.payload] }

        case DELETE_TODO:

            return { ...state, todoList: state.todoList.filter((item) => item.id !== action.payload) }

        case SET_TODO_FILTER:

            return { ...state, todoFilter: action.payload }

        case COMPLETE_TODO:
            const arr = [...state.todoList]
            const findedIndex = arr.findIndex((item) => item.id === action.payload.id)
            arr[findedIndex].complete = action.payload.complete;
            return { ...state, todoList: arr }

        default:
            return state


    }
}

export default todoReducer;