import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/img1.png';
import whiteLogo from '../assets/img/whiteLogo.png';

const ContainerRightX = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  background: url(${img1}) center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 3%;
`;

const ContainerRight = () => {
  return (
    <ContainerRightX data-testid="test-ContainerRight-component">
      <BoxLogo>
        <img src={whiteLogo} alt="whiteLogo" />
      </BoxLogo>
    </ContainerRightX>
  );
};
export default ContainerRight;
