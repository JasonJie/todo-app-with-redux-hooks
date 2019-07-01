import { configureStore } from "redux-starter-kit";
import todosReducer from "../reducers/todos";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
