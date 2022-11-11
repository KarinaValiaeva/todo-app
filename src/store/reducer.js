import { SET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } from "./types";

const initialState = {
  todos: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload.slice(0, 10),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, title: action.payload },
        ],
      };

    case EDIT_TODO: {
      let arr = state.todos.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          return [...acc, { ...item, title: action.payload.title }];
        }
        return [...acc, item];
      }, []);
      return {
        state,
        todos: arr,
      };
    }

    case REMOVE_TODO: {
      let arr = state.todos.filter((item) => item.id !== action.payload);
      return { state, todos: arr };
    }

    default:
      return state;
  }
}
