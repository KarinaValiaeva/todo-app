import { SET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./types"

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    payload: todos
  }
}

export const addTodoItem = text => {
    return {
      type: ADD_TODO,
      payload: text
    }
  }

  export const editTodoItem = todo => {
    return {
      type: EDIT_TODO,
      payload: todo
    }
  }

  export const removeTodoItem = id => {
    return {
      type: REMOVE_TODO,
      payload: id
    }
  }