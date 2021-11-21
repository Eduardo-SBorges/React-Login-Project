import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const Btn = styled.button`
  color: white;
  border-radius: 50px;
  border: none;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  padding: 5px 0;
  width: 100%;
  height: 60px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #ff2d04 100%, #c13216 0%);
    transition: 0.4ms;
  }
`;

const Button = () => {
  return <Btn>{<Text text="Continuar" size="18px" weight="700" />}</Btn>;
};

export default Button;
