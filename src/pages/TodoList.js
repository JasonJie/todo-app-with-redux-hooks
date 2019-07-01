/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector(state => state.todos);

  return (
    <React.Fragment>
      <div className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todo.map(item => (
            <React.Fragment key={item.id}>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{item.text}</label>
                  <button className="destroy" type="button" />
                </div>
                <input className="edit" defaultValue="Rule the web" />
              </li>
            </React.Fragment>
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
