import Addtodo from './Components/AddTodo';
import Appname from './Components/AppName';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from './Components/TodoItems';
import { Todoprovider } from './store/Appcontext';

// const TodoReducer = (state, action)
// if(action.type === "todotext"){
//  state 
// }

function App() {
  return (
    <Todoprovider>
      <div className="app-shell">
        <div className="card-surface">
          <Appname />
          <Addtodo />
          <TodoItems />
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
