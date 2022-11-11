import "./Main.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../../store/state";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function TodoList() {
  let todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);

  return (
    <main className="main">
    <div className="todo-container">
      <TodoInput />
      <ol className="todo-list">
        {todos.map((item, index) => 
          (
          <li key={index}>
            <TodoItem todo={item} />
          </li>
        ))}
      </ol>
      {/* <Fab color="neutral" aria-label="add">
        <AddIcon />
      </Fab> */}
    </div>
    </main>
  );
}


export default TodoList;
