import React from 'react';
import styled from 'styled-components';
import ContainerLeft from '../Containers/ContainerLeft';
import ContainerRight from '../Containers/ContainerRight';

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  color: #fff;
  height: 100vh;
`;

const Login = () => {
  return (
    <ContainerStyled data-testid="test-Login-component">
      <ContainerLeft />
      <ContainerRight />
    </ContainerStyled>
  );
};

export default Login;
