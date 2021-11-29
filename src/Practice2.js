import React from 'react'
import {Grid} from '@mui/material'
import MyContainer from './Container'

const Practice2 = () => {
    return (
        <Grid container spacing={2} sx={{
            height: '100vh',backgroundColor:'black', justifyContent: { lg: 'space-evenly' },alignItems:'start'
        }}>
           <MyContainer color='blue'/>
           <MyContainer align='center' color='purple'/>
           <MyContainer color='pink'/>
        </Grid>
    )
}

export default Practice2
