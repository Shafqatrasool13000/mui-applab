import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FAQ = () => {
    return (
        <Box my={5} textAlign='center'>
            <Box my={3}>
                <Typography variant='h4' fontWeight='bold'>Frequently Asked Questions</Typography>
            </Box>
            <Typography variant='body1' mt={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, impedit quae. Sit libero officia,<br /> exercitationem sapiente repudiandae perspiciatis iure nihil ducimus quaerat.</Typography>
        </Box>
    )
}

export default FAQ
