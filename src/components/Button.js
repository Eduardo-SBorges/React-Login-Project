import React from 'react'
import styled  from 'styled-components'
import Text from './Text'

const Btn = styled.button`
    color: white;
    border-radius: 50px;
    border: none;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    padding: 5px 0;
    width: 50.5%;
    &:hover {
      cursor:pointer;
      background: linear-gradient(90deg, #FF2D04 100%, #C13216 0%);
      transition: 0.4ms;
    }
  `

const Button = () => {
  
  
  
  return (
    <Btn>{<Text text="Continuar" size="18px" weight="700"/>}</Btn>
  )
}

export default Button
