import React, { useState, useEffect } from 'react'
import ApiRequest from '../../api'
import { useParams, useNavigate, Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './SingleTask.css'



const SingleTask = () => {
  const navigate = useNavigate();
  
  const [task, setTask] = useState({});

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  
  const { id } = useParams();

  useEffect(() => {
    taskById(); 
  }, [])

  const taskById = async() => {
    const request = await ApiRequest.getById(id);
    const task = await request.json();

    setTask(task);
  }

  const handleDelete = async() => {
    const request =await ApiRequest.delete(id);
    const result = await request.json();

    alert(result.message)
    navigate('/')

  }

  return(
    <div className="details">
      <div className="info-all">
        <div className="info">
          <p className="title">Título: {task.title}</p>
          <p className="information">Descrição: {task.description}</p>
          <p className="priority">Prioridade: {task.priority}</p>
          <p className="status">Status: {task.status}</p>
          <p className="due">Prazo: {task.dueDay}</p>
        </div>
        <div className="buttons">
          <Link to={`/edited/${task._id}`}>
            <button className="edit-success">Editar</button>
          </Link>
            <button 
              className="delete-success"
              onClick={onOpenModal}>
              Deletar</button>
            <Modal open={open} onClose={onCloseModal} center>
              <h3>Deseja realmente apagar esta tarefa ? </h3>
              <div className="buttons">
                <button className="delete" onClick={handleDelete}>Sim</button>
                <button className="nodelete" onClick={onCloseModal}>Não</button>
              </div>
            </Modal>
        </div>    
      </div>
           
    </div>
  )
}

export default SingleTask