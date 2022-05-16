import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import CardContainer from './card-components/CardContainer'
import './CardSection.css'
function CardSection() {
  return (
    <div className='card__section'>
       {/* <Scrollbars style={{ width: 500, height: 300 }}> */}
        <CardContainer/>
      {/* </Scrollbars> */}
    </div>
  )
}

export default CardSection