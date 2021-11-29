import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PicSide from './PicSide'

const DownloadApp = () => {
    return (
        <>
            <Box>
                <Grid container  row justifyContent='center'  alignItems='center'>
                    <Grid item md={6} >
                        <h3>Download our App now !</h3>
                        <p>The rise of mobile devices transforms the way we consume information entirely and world 's most elevent channel such as facebook</p>
                        <Grid container mt={3}>
                            <Grid item md={4}><img src="images/apple.png" alt="apple"  /></Grid>
                            <Grid item md={4}><img src="images/android.png" alt="android" /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} sx={{textAlign:{xs:'center',md:'unset'}}}>
                        <PicSide  img="images/DownApp.png" width='500px'  alt="features" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DownloadApp