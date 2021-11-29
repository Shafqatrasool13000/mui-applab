import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PicSide from './PicSide'
import Avatar from '@mui/material/Avatar';
const MeetClient = () => {
    return (
        <>
            <Box my={4} textAlign='center' >
                <Grid container justifyContent='start' alignItems='center'>
                    <Grid item lg={6}>
                        <PicSide img='images/meetclient.png' width='350px' />
                    </Grid>
                    <Grid item lg={6} textAlign='center'>
                        <Typography variant='h4'>Meet Client Satisfaction by using product</Typography>
                        <Box my={2}>

                            <Typography variant='subtitle1'>The rise of mobile devices transforms the way we consume information around the world by most elevent channel such as facebook.</Typography>
                        </Box>
                        <Box my={2}>

                            <img src="images/stars.png" className='my-2' alt="reviews" />
                        </Box>
                        <Typography fontWeight='bold' mt={2} >User friendly & Customizable</Typography>
                        <Typography variant='subtitle1'>Bring to the table win-win survival strategies to ensure proact</Typography>
                        <Box>
                            <Avatar>
                                <img src="images/ceo.png" alt="ceopic" />
                            </Avatar>
                            <Typography variant='body2' >Zoltan Nemeth</Typography>
                            <Typography variant='body2' >CEO of Pixler Lab</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MeetClient