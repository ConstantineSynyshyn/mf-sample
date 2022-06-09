import React from "react"

import { AppBar, Toolbar, Typography } from "@material-ui/core"

export default () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Shared application Header</Typography>
    </Toolbar>
  </AppBar>
)
