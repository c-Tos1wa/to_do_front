import React, { useState, useEffect } from 'react'
import ApiRequest from '../../api'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './SingleTask.css'


const SingleTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({});
  
  const { id } = useParams();


  useEffect(() => {
    taskById(); 
  }, [])

  const taskById = async() => {
    const request = await ApiRequest.getById(id);
    const task = await request.json();

    setTask(task);

  }

  return(
    <div className="details">
      <div className="info-all">
        <div className="info">
          <p className="title">Título da tarefa: {task.title}</p>
          <p className="information">Descrição: {task.description}</p>
          <p className="priority">Prioridade: {task.priority}</p>
          <p className="status">Status: {task.status}</p>
          <p className="due">Prazo: {task.dueDay}</p>
        </div>
        <div className="buttons">
          <Link to={`/edited/${task._id}`}>
            <button className="edit-success">Editar</button>
          </Link>
          <Link to={`/delete/${task._id}`}>
            <button className="delete-success">Deletar</button>
          </Link>
        </div>    
      </div>
           
    </div>
  )
}

export default SingleTask