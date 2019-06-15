
import React from 'react';
import '../node_modules/todomvc-app-css/index.css';

const App = () => (
  <div>
    <div className="todoapp">
      <div className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </div>
      <div className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked />
              <label>Taste JavaScript</label>
              <button className="destroy" type="button" />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        </ul>
      </div>
    </div>
  </div>
    );


export default App;
