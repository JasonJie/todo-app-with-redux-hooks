import React from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const keyUp = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value) {
        dispatch({
          type: "todos/add",
          payload: { text: e.target.value },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onKeyUp={keyUp} />
      </div>
    </React.Fragment>
  );
};
export default AddTodo;
