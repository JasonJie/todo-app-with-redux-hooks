const initState = { todo: [] };

function counter(state = initState, action) {
  switch (action.type) {
    case "addTodo":
      return Object.assign(
        {},
        state,
        state.todo.push(initTodo(action.payload.todoItem)),
      );
    case "isChecked": {
      const newTodo = state.todo;
      newTodo[action.payload.index].done = !state.todo[action.payload.index]
        .done.checked;
      return Object.assign({}, state, newTodo);
    }
    default:
      return state;
  }
}

const initTodo = (todoItem) => {
  const _init = {
    title: "",
    done: false,
  };
  _init.title = todoItem.title;
  return _init;
};

export default counter;
