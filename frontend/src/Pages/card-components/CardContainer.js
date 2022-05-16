import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import './CardContainer.css'
import MainCard from './MainCard'
import SubCard from './SubCard'
import SubCard2 from './SubCard2'
function CardContainer() {
  return (
    <Scrollbars autoHide>
      <div className='card__container'>
        <div className="card__container__heading">
          <h2>#Games</h2>
        </div>
          <MainCard/>
          <SubCard/>
          <SubCard2/>
      </div>
    </Scrollbars>
  )
}

export default CardContainer