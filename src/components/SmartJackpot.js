import React from 'react'
import { Grid, Box } from '@mui/material'
import { Typography } from '@material-ui/core'


const SmartJackpot = () => {
    return (
        <>
            <Box my={5}>
                <Grid container spacing={1} justifyContent='center' sx={{
                    textAlign: { xs: 'center' },
                }} >
                    <Grid item md={5} >
                        <Box >
                            <Typography variant='h4'>Smart jackpots that you may love this anytime & anywhere</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={2}>

                        <Box sx={{
                            borderLeft: '0.3px solid black',
                            height: '100px',
                            marginLeft: '5rem', display: {
                                xs: 'none', md: 'block'
                            }
                        }} >

                        </Box>
                    </Grid>
                    <Grid item md={5} >
                        <Typography variant='body1' >The rise of mobile devices transforms the way we consume information and the world 's' most entirely channel such as Facebook</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default SmartJackpot
