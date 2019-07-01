import { createAction, createReducer } from "redux-starter-kit";

let nextTodoId = 0;

const addTodo = createAction("todos/add");
const toggleTodo = createAction("todos/toggle");
// const visibilityFilter = createAction("todos/visibilityFilter");

const todosReducer = createReducer([], {
  [addTodo]: (state, action) => {
    const todo = {
      id: (nextTodoId += 1),
      text: action.payload.text,
      completed: false,
    };
    state.push(todo);
  },
  [toggleTodo]: (state, action) => {
    const index = action.payload;
    const todo = state[index];
    todo.completed = !todo.completed;
    // return [...state.slice(0, index), todo, ...state.slice(index + 1)];
  },
});

export default todosReducer;
