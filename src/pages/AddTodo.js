import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);
  const keyUp = (e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: "addTodo",
        payload: { title: "123" },
      });
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <h1>
          todos
          {`${todo.length}`}
        </h1>
        <input className="new-todo" placeholder="What needs to be done?" onKeyUp={keyUp} />
      </div>
    </React.Fragment>
  );
};
export default AddTodo;
