import { addTodoItem } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField } from "@mui/material";
function TodoInput() {
  const [value, setValue] = useState("");
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsVisibleInput(false);
    dispatch(addTodoItem(value));
  }

  function handleClickAdd() {
  
console.log("click");
setIsVisibleInput(true);
  }

  return (
    <div className="todo-input">
      <Fab color="primary" aria-label="add" onClick={() => {handleClickAdd()}}>
        <AddIcon />
      </Fab>
      {isVisibleInput && (<>
        <TextField variant="outlined"  id="outlined-basic" type="text"
        name="title"
        value={value}
        onChange={handleChange} />
         
      {/* <input
        type="text"
        name="title"
        value={value}
        onChange={handleChange}></input> */}
    
      <Button variant="contained" onClick={handleSubmit}>Add task</Button>
      
      </>)}
    </div>)
}

export default TodoInput;