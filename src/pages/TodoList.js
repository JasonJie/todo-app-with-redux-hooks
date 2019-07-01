/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todo = useSelector(state => state.todos);

  return (
    <React.Fragment>
      <div className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todo.map(item => (
            <TodoItem item={item} key={item.id} />
          ))}
        </ul>
        {/* <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy" type="button" />
            </div>
            <input className="edit" value="Rule the web" />
          </li>

          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked />
              <label>Taste JavaScript</label>
              <button className="destroy" type="button" />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        </ul> */}
      </div>
    </React.Fragment>
  );
};

export default TodoList;
