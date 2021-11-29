import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SimpleAccordion from './RiderDetails'

const RiderEmergency = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Box textAlign='center' my={3}>
        <Typography variant='h4' fontWeight='bold'>How to contact with riders emergency?</Typography>
        <p>Leverage agile frameworks to provide a robust synopsis  for high Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Facilis animi velit aspernatur vero  esse  voluptates error reiciendis rem excepturi ratione!</p>
      </Box>
      <SimpleAccordion/>
    </>
  )
}

export default RiderEmergency
