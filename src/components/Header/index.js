import React from 'react'
import { Container, Grid, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <Container fixed>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item xs={12} sm={6} marginBottom={3}>
            <AppBar position="static" spacing={3}>
              <Toolbar>
                <Link to='/'>Início</Link>
                <Link to='/add'>Cadastro</Link> 
              </Toolbar>    
            </AppBar>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header;