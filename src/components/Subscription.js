import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';
const Subscription = () => {

    return (
        <Box textAlign='center'>
            <Grid container justifyContent='space-around' >
                <Box lg={6}>
                    <Typography variant='h3' paragraph>$0 <span>/month</span></Typography>
                    <Typography variant='h6' paragraph>Bussiness Class</Typography>
                    <Box className="mt-5">
                        <Typography variant='body2' paragraph>For Small team of office</Typography>
                        <Typography  variant='body2' paragraph>Drag & Drop Builder  </Typography>
                        <Typography  variant='body2' paragraph> 1,000's of Templates</Typography>
                        <Typography  variant='body2' paragraph> Blog Support Tools</Typography>
                        <Typography variant='body2' paragraph>eCommerce Store</Typography>
                    </Box>
                    <Button variant="contained">Start Free Trail</Button>
                </Box>
                <Box lg={6}>
                    <Typography variant='h3' paragraph>$99/Month</Typography>
                    <Typography variant='h6' paragraph>Pro Master</Typography>
                    <Box className="mt-5">
                        <Typography variant='body2' paragraph>For Best apportunities</Typography>
                        <Typography variant='body2' paragraph>Drag & Drop Builder  </Typography>
                        <Typography variant='body2' paragraph> 1,000's of Templates</Typography>
                        <Typography variant='body2' paragraph>Blog Support Tools</Typography>
                        <Typography variant='body2' paragraph>eCommerce Store</Typography>
                    </Box>
                    <Button variant="contained">Subscribe Now</Button>

                    <br />
                    <Box mt={4} >
                        <a href="/" className='text-decoration-none '>or Start Free 14 days Trail</a>
                    </Box>

                </Box>
            </Grid>

        </Box>
    )
}

export default Subscription
