import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import WhyChoose from '../api/WhyChooseApi'

const WhyChooseFeatures = () => {
    return (
        <Box my={5} >
            <Grid container spacing={1} >
                {WhyChoose.map((curE, i) => {
                    return (
                        <Grid item md={4} key={i} textAlign='center'>
                            <i className={`fontawesome-icon ${curE.logo}`}></i>
                            <Box my={4} >
                                <Typography variant='subtitle1' mt={4} fontSize={600} >{curE.title}</Typography>
                                <Typography variant='body2' mb={5}> {curE.info}.</Typography>
                            </Box>
                        </Grid>)
                })}
            </Grid>
        </Box>
    )
}
export default WhyChooseFeatures
