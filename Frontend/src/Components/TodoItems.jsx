import Appcontext from "../store/Appcontext";
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoItems = () => {
  const { todoItems, onDelete, loading, error } = useContext(Appcontext);

  return (
    <section className="list-card">
      <div className="list-head">
        <p>Tasks</p>
        <span className="pill">{todoItems.length}</span>
      </div>
      {loading && <p className="empty">Loading tasks...</p>}
      {error && <p className="empty" style={{color: 'red'}}>Error: {error}</p>}
      {!loading && !error && todoItems.length === 0 && (
        <p className="empty">Nothing here yet. Add your first task above.</p>
      )}
      {!loading && todoItems.length > 0 && (
        <div className="list">
          {todoItems.map((item) => (
            <TodoItem
              todoId={item._id || item.id}
              key={item._id || item.id}
              tododate={item.date}
              todotext={item.task}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TodoItems;