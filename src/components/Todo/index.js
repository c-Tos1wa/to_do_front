import React from 'react'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'


const Todo = (props) => {
  const args = props.arg;

  return (
    <>
    <Card variant="outlined">
      <CardContent>
        <Typography variant='h3' align='center'>
          {args.name}   
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          color="primary">
            Clique aqui!
        </Button>
        <Button
          variant="contained"
          color="secondary">Atenção!</Button>
      </CardActions>
    </Card>

    </>
  )
}
export default Todo