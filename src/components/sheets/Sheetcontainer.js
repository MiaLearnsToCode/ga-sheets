import React from 'react'
import { Typography, Container, Card, CardContent } from '@material-ui/core'

const Sheetcontainer = ({ classes, sheet }) => (
  <Container maxWidth="lg">
    <Card className={classes.cardLong}>
      <CardContent className={classes.cardLongContent}>
        <Typography>
          {sheet.name}
        </Typography>
        <Typography>
          Button?
        </Typography>
      </CardContent>
    </Card>
  </Container>
)

export default Sheetcontainer

