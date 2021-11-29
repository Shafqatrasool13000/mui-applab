import React from 'react'
import FeaturesRight from './FeaturesRight'
import PicSide from './PicSide'
import { Grid } from '@mui/material'

const Features = () => {
    return (
        <>
                <Grid container sx={{justifyContent:{sm:'center'},alignItems:{sm:'center'}}} >
                    <Grid item md={6}>
                        <PicSide img='images/features/FImg.png'/>
                    </Grid>
                    <Grid item md={6} sx={{textAlign:{
                        xs:'center'
                    }}}>
                        <FeaturesRight />
                    </Grid>
                </Grid>
            
        </>
    )
}

export default Features
