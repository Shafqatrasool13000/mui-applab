import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import JackpotApi from '../api/JackPotApi'

const SmartJackpotFeatures = () => {
    return (
       
            <Box my={5}>
                <Grid container spacing={2} textAlign='center'>
                    {JackpotApi.map((curE,i) => {
                        return (<Grid item md={4}  key={i}>
                            <img src={curE.img}  className='img-fluid' alt="Network" />
                            <Box mt={4} mb={1} fontWeight='bold'>{curE.title}</Box>
                            <p>{curE.subtitle}</p>
                        </Grid>)
                    })}
                </Grid>
            </Box>
       
    )
}

export default SmartJackpotFeatures
