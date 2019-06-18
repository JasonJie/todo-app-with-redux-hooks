const initState = { todo: [] };

function todoReduce(state = initState, action) {
  switch (action.type) {
    case "addTodo": {
      const { todo } = state;
      todo.push(initTodo(action.payload.title));
      return Object.assign({}, state, { ...state, todo });
    }
    case "isChecked": {
      const newTodo = state.todo;
      newTodo[action.payload.index].done = !state.todo[action.payload.index].done.checked;
      return Object.assign({}, state, newTodo);
    }
    default:
      return state;
  }
}

const initTodo = (title) => {
  const _init = {
    title: "",
    done: false,
  };
  _init.title = title;
  return _init;
};

export default todoReduce;
