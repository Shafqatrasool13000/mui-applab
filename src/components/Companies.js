import { Typography } from '@material-ui/core'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ImagesApi from '../api/ImagesApi'

const Companies = () => {
    return (
        <>
            <Box my={3}>
                <Box textAlign='center' >
                    <Typography variant='h5' > 

                    Trusted by Companies Like
                    </Typography>
                    </Box>
                    <Grid container>
                        {ImagesApi.map((curE, i) => (
                            <Grid item xs={12} sm={4} md={4} lg={2} textAlign='center' my={4} key={i}>
                                <img src={curE.img} className='img-fluid' alt="company" /></Grid>
                        ))}
                    </Grid>
              
            </Box>
        </>
    )
}

export default Companies
