import { setTodos } from "./actions";
import axios from "axios";

export const getTodos = () => {

  const ROOT_URL = "https://jsonplaceholder.typicode.com/todos";
  return async (dispatch) => {
    const response = await axios.get(ROOT_URL)
    dispatch(setTodos(response.data))
  }
}