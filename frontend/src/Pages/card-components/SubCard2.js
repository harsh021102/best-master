import React from 'react'
import './SubCard.css'
import styled from 'styled-components'
import { IoLogoGameControllerB } from "react-icons/io";
import chess from '../images/chess.jpg'
function SubCard2() {
  return (
    <div className="outer__container">
      <section>
          <div className="container__1">
              <div className="card">
                  <div className="imgBx">
                      <img src={chess}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Someone Famouse<br/> <span>Creative Designer</span> </h3>
                      </div>
                      <ul className="sci">
                          <li><a href="#"><GameButton><Gamepad size="35" /></GameButton></a></li>
                      </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="imgBx">
                      <img src={chess}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Someone Famouse<br/> <span>Creative Designer</span> </h3>
                      </div>
                      <ul className="sci">
                          <li><a href="#"><GameButton><Gamepad size="35" /></GameButton></a></li>
                      </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="imgBx">
                      <img src={chess}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Someone Famouse<br/> <span>Creative Designer</span> </h3>
                      </div>
                      <ul className="sci">
                          <li><a href="#"><GameButton><Gamepad size="35" /></GameButton></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
const Gamepad = styled(IoLogoGameControllerB)`
  /* color: hsla(0, 0%, 100%, 0.75); */
  /* padding: 4px; */
`
const GameButton = styled.button`
  /* padding: 12px; */
  width: 100px;
  height: 50px;
  border-radius: 10px ;
  background: hsl(244, 38%, 16%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: white;
  }
`
export default SubCard2