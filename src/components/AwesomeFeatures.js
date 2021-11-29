import { Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const AwesomeFeatures = () => {
    return (
        <>
            <Box textAlign='center' my={5}>
                <Typography variant='h3'>Get awesome features, without <br /> extra charges</Typography>
                <Box my={3}>
                    <Typography  variant='body1' >The rise of mobile devices transforms the way we consume information entirely <br /> and the world most elevent channels such as Facebook.</Typography>
                </Box>
                <Switch textAlign='center' >
                </Switch>
            </Box>

        </>
    )
}

export default AwesomeFeatures
