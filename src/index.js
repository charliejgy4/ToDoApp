
import React from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
import App from './App';
// import FilterButton from './FilterButton'


const DATA = [
  { id: "todo-0", name: "Meeting with Doctor", completed: true },
  { id: "todo-1", name: "Meeting with Business Partners", completed: false },
  { id: "todo-2", name: "Projects to complete", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

