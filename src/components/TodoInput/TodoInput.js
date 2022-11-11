import { addTodoItem } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
function TodoInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodoItem(value));
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        name="title"
        value={value}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
}

export default TodoInput;
