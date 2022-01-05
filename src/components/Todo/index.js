import React from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'


const Todo = (props) => {
  const args = props.arg;

  return (
    <>
    <Card variant="outlined">
      <CardContent>
        {args.name}   
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          color="primary">
            Clique aqui!
        </Button>
      </CardActions>
    </Card>

    </>
  )
}
export default Todo