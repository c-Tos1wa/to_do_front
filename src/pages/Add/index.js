import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiRequest from '../../api'
import { FiEdit } from 'react-icons/fi';

import './NewTask.css'

const CreateNewTask = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    dueDay: '',
  });

  const handleChange = (event) => {
    const fieldsFull = {
      ...data
    }

    fieldsFull[event.target.name] = event.target.value

    setData(fieldsFull)
  }

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const response = await ApiRequest.post(data);
    const form = await response.json();
    alert(form.message);

    navigate('/');
  }

  return(
    <>
    <h4>Adicione uma nova tarefa <FiEdit /></h4>
    <form onSubmit={HandleSubmit}>
      <div className="form">
        <div className="float-label">
          <label htmlFor="title">Titulo da Tarefa</label>
            <input 
              id="title"
              className="title" 
              name="title"
              value={data.title}
              onChange={handleChange}
            />
        </div>
        <div className="float-label">
          <label htmlFor="description">Descrição</label>
            <input
              id="description"
              className="title"
              name="description"
              value={data.description}
              onChange={handleChange} />
        </div>
        <div className="float-label">
          <label htmlFor="priority">Prioridade</label>
            <select 
              id="priority"
              className="priority-form"
              name="priority"
              value={data.priority}
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
              value={data.status}
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
              value={data.dueDay}
              onChange={handleChange} />
        </div>
        <button className="success" type="submit">Enviar</button>
      </div>
    </form>
    </>
  )
}
  
export default CreateNewTask;

