import React from 'react'
import { Features, mainFeature } from '../api/FeaturesApi'
import { Box } from '@mui/material'
import { Typography } from '@material-ui/core'

const FeaturesRight = () => {
    return (
        <>
                <h3>{mainFeature.title}</h3>
                <p>{mainFeature.subtitle}</p>
                {
                    Features.map((curEl, i) => {
                        return (
                            <Box container key={i}>
                                <Box><img  src={curEl.img} alt={curEl.title} /></Box>
                                <Box ><Typography>{curEl.title}</Typography>
                                    <p>{curEl.subtitle}</p></Box>
                            </Box>)
                    })
                }

        </>
    )
}

export default FeaturesRight
