import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { UnlimitedFeatures } from '../api/UltimateFeaturesApi'
import PicSide from './PicSide'
import TextSide from './TextSide'

const UnlimitedFeature = () => {
    return (
        <>
            <Box sx={{
                textAlign: { xs: 'center', md: 'unset' }
            }}>
                <Typography variant='h5' fontWeight='bold'>Ultimate features <br /> that we built</Typography>
                <Typography variant='body1' mt={2}>The rise of Mobile devices transforms the way <br /> we consume information correctly</Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' spacing={1} >
                <Grid item md={7} sx={{
                    textAlign: { xs: 'center', md: 'unset' },position:'relative'
                }} >
                    <Grid container>
                        {UnlimitedFeatures.map((curE, i) => {
                            return (
                                <Grid item lg={6} my={4} key={i}>
                                    <img src={curE.img} alt="unlimitedfeatures" />
                                    <Typography fontWeight='bold' mt={4}>{curE.title}</Typography>
                                    <Typography mb={2}>{curE.subtitle}.</Typography>
                                </Grid>)
                        })}
                    </Grid>
                    <Button variant="contained" >
                        See All

                    </Button>
                </Grid>
                <Grid item md={5} sx={{
                    textAlign: { xs: 'center', md: 'unset' }
                }}>
                    <Box >
                    <PicSide  img='images/features/ULImg2.png' />
                    </Box>
                    <Box >

                    <PicSide  img='images/features/ULImg1.png'  />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default UnlimitedFeature