import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Todo from '../Todo'

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const returnApi = await response.json();
    console.log(returnApi.results);
    setItems(returnApi.results)
  }

  return (
    <>
      <Grid spacing={5}>
        <Grid item xs={6} spacing={3}>
          <Grid container justifyContent="center">
          {
            items.map((item) => (
              <Todo key={item.id} arg={item}/>
            ))
          }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ListItems;