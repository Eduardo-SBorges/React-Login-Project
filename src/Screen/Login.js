import React from 'react';
import styled from 'styled-components';
import LoginForms from '../Containers/LoginForms';
import LoginImages from '../Containers/LoginImages';

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
      <LoginForms />
      <LoginImages />
    </ContainerStyled>
  );
};

export default Login;
