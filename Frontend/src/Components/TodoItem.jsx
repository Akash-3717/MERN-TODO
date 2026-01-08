import { useContext } from "react"
import Appcontext from "../store/Appcontext";

const TodoItem = ({todotext, tododate,  todoId}) => {
 const {onDelete} = useContext(Appcontext)

 // Format date for display
 const formatDate = (date) => {
   if (!date) return '';
   const d = new Date(date);
   return d.toLocaleDateString();
 }

return(
      <div className="container">
      <div className='row kg-row'>

      <div className="col-6" >{todotext}</div>
      <div className="col-4">{formatDate(tododate)}</div>

      <div className="col-2">
        <button 
          type="button" 
          className="btn btn-outline-danger btn-sm rounded-pill" 
          onClick={() => onDelete(todoId)}
        >
          ✕ Delete
        </button>
      </div>
          </div> 
          </div>
 

)
}

export default TodoItem;