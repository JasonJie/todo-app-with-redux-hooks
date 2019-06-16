const initState = { todo: [] };

function counter(state = initState, action) {
    switch (action.type) {
        case 'addTodo': 
            return Object.assign({}, state, state.todo.push(action.payload.todoItem));
        default: return state;
    }
}
 
export default counter;
