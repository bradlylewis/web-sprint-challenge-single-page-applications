import React from "react";
import { useHistory } from "react-router-dom";
import Styled from 'styled-components'
import Pizza from './Assets/Pizza.jpg'

const PizzaBackground = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${Pizza});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 45vh;
    /* border: 2px solid red; */
`

const OrderButton = Styled.button`
  color: black;
  padding: 0.5rem 2.5rem;
  margin-top: 10rem;
  font-family: 'Sniglet', cursive;
  letter-spacing: .15rem;
  background-color: white;
  text-transform: uppercase;
  color: black;
  transition: all .1s;
  &:hover {
    color: #f44336;
    cursor: pointer;
  }
`

export default function Home() {
    const history = useHistory();

    const routeToForm = () => {
      console.log(history);
      history.push("pizza");
    }

  return (
    <PizzaBackground className = "home-wrapper">
        <div>
            <OrderButton id="order-pizza" className="order-button"  onClick={routeToForm}>
                Pizza?
            </OrderButton>
        </div>
    </PizzaBackground>
  )
}