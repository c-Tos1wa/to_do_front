import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import Todo from '../Todo'
import ApiRequest from '../../api'

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [])

  const getItems = async () => {
    const response = await fetch('https://backend-dolist.herokuapp.com/')
    const returnApi = await response.json();
    setItems(returnApi)
  }

  return (
    <>
      <Container fixed>
        <Grid item xs={6}>
          <Grid container justifyContent="center" spacing={3} margin={3}>
          {
            items.map((item) => (
              <Todo key={item._id} arg={item}/>
            ))
          }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ListItems;