import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Todo = (props) => {
  const tasks = props.task;

  return (
    <>
    <Link to={`each/${tasks._id}`}>
      <div class="card">
        <div class="card-body">
          <h3 class="title">{tasks.title}</h3>
          <p className="priority">Prioridade: {tasks.priority}</p>     
          <p className="due">Prazo: {tasks.dueDay}</p>     
        </div>
      </div>
    </Link>
    </>
  )
}
export default Todo