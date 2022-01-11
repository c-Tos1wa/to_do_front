import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ApiRequest from '../../api'


const UpdateTask = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    dueDay: '',
  });

  useEffect(() => {
    TaskById();
  }, [])

  const { id } = useParams();

  const TaskById = async() => {
    const response = await ApiRequest.getById(id);
    const task = await response.json();
    setTask(task)
  }

  const handleChange = (event) => {
    const taskEdited = {
      ...task
    }

    taskEdited[event.target.name] = event.target.value

    setTask(taskEdited)
  }

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const response = await ApiRequest.put(task, id);
    const result = await response.json();
    alert(result.message);

    navigate(`/each/${id}`);
  }

  return(
    <form onSubmit={HandleSubmit}>
      <div className="form">
        <div className="float-label">
          <label htmlFor="title">Titulo da Tarefa</label>
            <input 
              id="title"
              className="title" 
              name="title"
              value={task.title}
              onChange={handleChange}
            />
        </div>
        <div className="float-label">
          <label htmlFor="description">Descrição</label>
            <input
              id="description"
              className="title"
              name="description"
              value={task.description}
              onChange={handleChange} />
        </div>
        <div className="float-label">
          <label htmlFor="priority">Prioridade</label>
            <select 
              id="priority"
              className="priority-form"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option></option>
              <option value="alta">alta</option>
              <option value="media">media</option>
              <option value="baixa">baixa</option>
            </select>
        </div>
        <div className="float-label">
          <label htmlFor="status">Status</label>
            <select 
              id="status"
              className="status-form"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option></option>
              <option value="fazer">fazer</option>
              <option value="fazendo">fazendo</option>
              <option value="feito">feito</option>
            </select>
        </div>
        <div className="float-label">
          <label htmlFor="dueDay">Prazo</label>
            <input
              id="dueDay"
              className="title"
              name="dueDay"
              type="date"
              value={task.dueDay}
              onChange={handleChange} />
        </div>
        <button className="edit-success" type="submit">Editar</button>
      </div>
    </form>
  )
}

export default UpdateTask