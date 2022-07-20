import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './Images/memories.png';

const App = () => {
  return (
    <Container maxidth="lg">
      <AppBar position="static">
        <Typography varaint="h2" align="center">Yaadein</Typography>
        <img src={memories} alt="Yaadein" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="streach" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={7}>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App