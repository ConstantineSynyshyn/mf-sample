import React from "react"
import { Grid } from "@material-ui/core"

import ProductCard from "./ProductCard"
import vehicles from "./vehicles"

export default () => (
  <Grid container>
    {vehicles.map((product) => (
      <Grid item sm={3} key={product.name}>
        <ProductCard {...product} />
      </Grid>
    ))}
  </Grid>
)
