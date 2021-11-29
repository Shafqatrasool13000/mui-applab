import { Grid, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
    return (

        <Box sx={{ backgroundColor: 'blue' }} color='white ' p={2}>
            <Grid container alignItems='center' justifyContent='center'>
                <Typography variant='h4' textAlign='center'>AppLab</Typography>
                <ul className='footer'>
                    <li>Home</li>
                    <li>Key Features</li>
                    <li>Terminal</li>
                    <li>pricing</li>
                    <li>FAQ</li>
                </ul>
                <ul className='footer icons-footer'>
                    <li><i class="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i class="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i class="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i class="fab fa-facebook-f fontawesome-icon"></i></li>
                </ul>
            </Grid>
            <Box variant='body1' textAlign='center'>Copyright© Arifur Rahman Tushar 2021. All rights reserved</Box>
        </Box>

    )
}

export default Footer
