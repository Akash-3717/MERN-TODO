import { useContext, useRef } from "react";
import Appcontext from "../store/Appcontext";

const Addtodo = () => {
  const todotextInput = useRef();
  const tododateInput = useRef();
  const { handleAdd } = useContext(Appcontext);

  const onAddClick = () => {
    const todotext = todotextInput.current.value.trim();
    const tododate = tododateInput.current.value;
    
    console.log('Add button clicked:', { todotext, tododate });
    
    if (!todotext || !tododate) {
      console.log('Validation failed - missing todotext or tododate');
      return;
    }
    
    console.log('Calling handleAdd...');
    handleAdd(todotext, tododate);
    todotextInput.current.value = "";
    tododateInput.current.value = "";
  };
   

  return (
    <div className="add-form">
      <div className="field">
        <label className="field-label">Task</label>
        <input
          type="text"
          placeholder="Write the next thing to do"
          ref={todotextInput}
        />
      </div>
      <div className="field">
        <label className="field-label">Date</label>
        <input type="date" ref={tododateInput} />
      </div>
      <button type="button" className="primary" onClick={onAddClick}>
        Add Task
      </button>
    </div>
  );
};

export default Addtodo;