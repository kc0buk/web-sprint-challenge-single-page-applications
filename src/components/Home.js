import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from '../styles/index'
import ImageDiv from './ImageDiv'

const pizzaImg = '../assets/Pizza.jpg'

export default function Home() {

  const history = useHistory()

  const routeToShop = () => {
    history.push('/pizza')
  }

  return (
    <Box>
    <ImageDiv url={pizzaImg}>
    </ImageDiv>
      {/* <img
        className='home-image'
        src={}
        alt=''
      /> */}
      <button
        onClick={routeToShop}
        className=''
      >
        Pizza?
      </button>
    </Box>
  )
}