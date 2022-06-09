import React from "react"
import {
  Container,
  Typography,
  CssBaseline,
  Paper,
  Grid,
} from "@material-ui/core"

import Header from "nav/Header"

import ProductCarousel from "./ProductCarousel"
import vehicles from "./vehicles"

function App() {
  return (
    <Container fixed>
      <CssBaseline />
      <Header />
      <Typography variant="h3">Home Page</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={3}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3}></Paper>
        </Grid>
      </Grid>
      <ProductCarousel products={vehicles} />
    </Container>
  )
}

export default App
