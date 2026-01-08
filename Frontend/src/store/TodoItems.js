
const TodoItemsReducer = (currentState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
const {id, todotext, tododate}= action.payload
        return [...currentState, {id, todotext, tododate}]
    }

    case 'DELETE_TODO':
        return currentState.filter((todo) => todo.id !== action.payload);
        case 'LOAD_TODOS':
            return action.payload.allItems;
            default:
                return currentState;
};
};

export default TodoItemsReducer;