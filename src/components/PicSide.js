import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system'


const PicSide = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }} >
        
            <CardMedia
                component="img"
                alt={props.img}
                image={props.img}
            />
        </Card>
    )
}
export default PicSide