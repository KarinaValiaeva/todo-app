import { addTodoItem } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
function TodoInput() {
  const [value, setValue] = useState("");
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodoItem(value));
  }

  function handleClickAdd() {
  
console.log("click");
setIsVisibleInput(true);
  }

  return (
    <div className="todo-input">
      <Fab color="neutral" aria-label="add" onClick={() => {handleClickAdd()}}>
        <AddIcon />
      </Fab>
      {isVisibleInput && (<>
      <input
        type="text"
        name="title"
        value={value}
        onChange={handleChange}></input>
    
      <button onClick={handleSubmit}>Добавить</button>
      </>)}
    </div>)
}

export default TodoInput;
