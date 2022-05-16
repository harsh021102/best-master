import React from 'react'
import CardSection from './CardSection'
import MainHeader from './MainHeader'
import './MainScreen.css'
// import MainHeader from './MainHeader'
function MainScreen() {
  return (
    <div className="mainscreen">
      <Routes>
        <Route path="/" element={<CardSection/>}/>
        <Route path="gameverse" element={<CardSection/>}/>
        <Route path="memory-game" element={<MemoryGame/>}></Route>
      </Routes>
    </div>
  )
}

export default MainScreen