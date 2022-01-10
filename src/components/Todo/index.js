import React from 'react'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'


const Todo = (props) => {
  const args = props.arg;

  return (
    <>
    <Card variant="outlined">
      <CardContent>
        <Typography variant='h4' align='center'>
          {args.title}   
        </Typography>
        <Typography variant='h5' align='center'>
          Prioridade: {args.priority}   
        </Typography>
        <Typography variant='h5' align='center'>
          Prazo: {args.dueDay}   
        </Typography>
      </CardContent>  
    </Card>
    </>
  )
}
export default Todo