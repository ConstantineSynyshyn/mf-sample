import React, { useState } from "react"
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  TextField,
  Grid,
} from "@material-ui/core"

import Header from "nav/Header"
import data from "home/data"
const ProductCarousel = React.lazy(() => import("home/ProductCarousel"))

function App() {
  const [isLazyComponentShown, setShown] = useState(false)

  return (
    <Container fixed>
      <CssBaseline />
      <Header />
      <Typography variant="h3">Search Page</Typography>
      {isLazyComponentShown ? (
        <React.Suspense fallback={null}>
          <ProductCarousel />
        </React.Suspense>
      ) : (
        <Button onClick={() => setShown(true)}>Lazy load carousel</Button>
      )}
    </Container>
  )
}

export default App
