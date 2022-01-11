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
    const response = await ApiRequest.getAll();
    const returnApi = await response.json();
    setItems(returnApi)
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