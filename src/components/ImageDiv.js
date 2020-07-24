import React from 'react'
import { Box } from '../styles/index'

function ImageDiv(props) {
    const { url } = props

    return (
        <Box>
            <img width ='100%' src={require('../assets/Pizza.jpg')} alt='alt' />
        </Box>
    )
}

export default ImageDiv