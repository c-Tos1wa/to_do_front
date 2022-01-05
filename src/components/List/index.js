import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
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
      <Container>
        <Grid item xs={6}>
          <Grid container justifyContent="center" spacing={3}>
          {
            items.map((item) => (
              <Todo key={item.id} arg={item}/>
            ))
          }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ListItems;