import React from 'react'
import {  Grid, Box } from '@mui/material'

const MyContainer = (props) => {
    return (
        <Grid item xs={12} sm={6} md={4}  sx={{
            alignSelf: {md:`${props.align}`}
        }}>
        <Box>
            <Grid container sx={{
                backgroundColor: `${props.color}`,  height:200, alignItems: 'flex-start', justifyContent: 'space-between'
            }}>
                <Grid item xs={2} sx={{
                    backgroundColor: 'red', padding: 4, width: '20px'

                }}>
                </Grid>
                <Grid item xs={2} sx={{
                    backgroundColor: 'green', padding: 4, width: '20px',
                    alignSelf: 'flex-end'
                }}>
                </Grid>
            </Grid>
            </Box>
        </Grid>
    )
}

export default MyContainer
