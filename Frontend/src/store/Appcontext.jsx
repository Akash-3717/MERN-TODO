import { createContext, useState, useEffect } from "react";
import { getTodos, createTodo, deleteTodo } from "../api/todoApi";

const Appcontext = createContext();

export const Todoprovider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setError(null);
      try {
        const todos = await getTodos();
        setTodoItems(todos);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch todos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = async (todotext, tododate) => {
    if (!todotext || !tododate) return;
    
    // Optimistic update - add immediately to UI
    const tempId = Date.now().toString();
    const optimisticTodo = { _id: tempId, task: todotext, date: tododate };
    setTodoItems((prev) => [...prev, optimisticTodo]);
    
    try {
      const newTodo = await createTodo({ task: todotext, date: tododate });
      // Replace temp item with real one from server
      setTodoItems((prev) => prev.map(item => item._id === tempId ? newTodo : item));
    } catch (err) {
      // Remove optimistic item on error
      setTodoItems((prev) => prev.filter(item => item._id !== tempId));
      setError(err.message);
      console.error("Failed to add todo:", err);
    }
  };

  const onDelete = async (todoId) => {
    // Optimistic update - remove immediately from UI
    const deletedItem = todoItems.find(item => item._id === todoId);
    setTodoItems((prev) => prev.filter((item) => item._id !== todoId));
    
    try {
      await deleteTodo(todoId);
    } catch (err) {
      // Restore item on error
      if (deletedItem) {
        setTodoItems((prev) => [...prev, deletedItem]);
      }
      setError(err.message);
      console.error("Failed to delete todo:", err);
    }
  };

  return (
    <Appcontext.Provider value={{ todoItems, handleAdd, onDelete, loading, error }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Appcontext;