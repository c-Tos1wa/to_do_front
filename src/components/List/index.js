import React, { useState, useEffect } from 'react'
import Todo from '../Todo'
import ApiRequest from '../../api'
import './list.css'

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems = async () => {

    try{
      const response = await ApiRequest.getAll();
      if(response.status === 500) {
        alert('Erro no servidor, verifique sua api')
      }
      const returnApi = await response.json();
      setItems(returnApi)
    } catch(err) {
      console.error('Erro:', err)
    }
  }

  return (
    <>
     <div className="list">

        {
          items.map((task) => (
            <Todo key={task._id} task={task}/>
          ))
        }
     </div>
         
    </>
  )
}

export default ListItems;