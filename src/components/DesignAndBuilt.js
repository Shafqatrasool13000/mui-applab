import { Typography, Grid, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PicSide from './PicSide'

const DesignAndBuilt = () => {
    return (
        <>
            <Box my={3} >
                <Grid container  justifyContent='start' alignItems='center' textAlign='center'>
                <Grid item lg={6} className="col-lg-6">
                <PicSide img='images/companies/design.png' width='350px'/>
                </Grid>
                    <Grid item lg={6} className="design-build">
                        <Typography variant='h3'>Designed & built by <br /> the latest code <br /> integration</Typography>
                        <Box my={3}>The rise of mobile devices transforms the way we consume information around the world by most elevent channel such as facebook.</Box>
                    <Button variant="contained" >
                      Learn More
                    </Button>
                    </Grid>
                    </Grid>
                </Box>
           
        </>
    )
}

export default DesignAndBuilt