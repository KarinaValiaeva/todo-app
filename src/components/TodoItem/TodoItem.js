import { useState, useEffect } from "react";
import { editTodoItem, removeTodoItem } from "../../store/actions";
import { useDispatch } from "react-redux";
import "./todoItem.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

function TodoItem(props) {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setData(props.todo.title);
  }, [props.todo]);

  function handleChange(e) {
    setData(e.target.value);
  }

  function handleEditTodo(e) {
    e.preventDefault();
    dispatch(editTodoItem({ ...props.todo, title: data }));
  }

  function handleRemoveTodo(e) {
    e.preventDefault();
    dispatch(removeTodoItem(props.todo.id));
  }

  return (
    <div className="todo-item">
      <input
      className="todo-item__input"
        type="text"
        name="title"
        value={data}
        onChange={handleChange}
      ></input>
      {/* <button onClick={handleEditTodo}>Редактировать</button> */}
      <IconButton aria-label="delete" size="large" color="primary" onClick={handleEditTodo}>
        <EditIcon  />
      </IconButton>
      <IconButton aria-label="delete" size="large" color="primary" onClick={handleRemoveTodo}>
        <DeleteIcon  />
      </IconButton>

      {/* <button onClick={handleRemoveTodo}>Удалить</button> */}
    </div>
  );
}

export default TodoItem;
