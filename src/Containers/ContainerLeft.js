import React from 'react';
import styled from 'styled-components';
import useInputValidation from '../hooks/useInputValidation';
import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import IconLogin from '../assets/svg/icon-user.svg';
import IconSenha from '../assets/svg/icon-password.svg';
import whiteLogo from '../assets/img/whiteLogo.png';

const ContainerLeftX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 15%;
  }
`;

const BoxLogo = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4%;
  margin-right: 4%;
  img {
    width: 75%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const BoxError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLeft = ({ value }) => {
  const email = useInputValidation('email');
  const password = useInputValidation('password');

  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorUser, setErrorUser] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);

  const login = {
    email: 'email.usuario@compasso.com.br',
    password: 'React@2021',
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (
      email.validate() &&
      password.validate() &&
      password.value === login.password &&
      email.value === login.email
    ) {
      setErrorMessage('');
      setErrorUser(false);
      setErrorPassword(false);

      console.log('Login realizado com sucesso!');

    } else if (
      password.value !== login.password &&
      email.value !== login.email
    ) {
      setErrorPassword(true);
      setErrorUser(true);
      setErrorMessage('Ops, e-mail e senha inválida');
    } else if (
      password.value !== login.password &&
      email.value === login.email
    ) {
      setErrorMessage('Ops, senha inválida');
      setErrorPassword(true);
    } else if (
      password.value === login.password &&
      email.value !== login.email
    ) {
      setErrorMessage('Ops, e-mail inválido');
      setErrorUser(true);
    }
  }

  return (
    <ContainerLeftX data-testid="test-ContainerLeft-component">
      <BoxLogo>
        <img src={whiteLogo} alt="whiteLogo" />
      </BoxLogo>
      <ContainerBox>
        <form onSubmit={handleSubmit}>
          <Text text="Olá," margin="0 0 4%" size="60px" />
          <Text text="Para continuar navegando de forma" size="16px" />
          <Text
            text="segura, efetue o login na rede."
            margin="0 0 25%"
            size="16px"
          />
          <Text text="Login" size="30px" margin="0 0 9%" />
          <Input
            margin="0 0 10%"
            type="text"
            placeholder="Usuário"
            fontSize="16px"
            borderColor={errorUser ? '#E9B425' : '#fff'}
            src={IconLogin}
            alt="login"
            {...email}
          />
          <Input
            margin="0 0 24%"
            type="password"
            placeholder="Senha"
            fontSize={password.value ? '50px' : '16px'}
            letterSpacing={password.value ? '5px' : '0'}
            borderColor={errorPassword ? '#E9B425' : '#fff'}
            src={IconSenha}
            alt="password"
            {...password}
          />
          {errorMessage && (
            <BoxError>
              <Text
                text={errorMessage}
                size="16px"
                color="#E9B425"
                weight="700"
                margin="-25% 0 0 0"
              />
            </BoxError>
          )}
          <Button />
        </form>
      </ContainerBox>
    </ContainerLeftX>
  );
};

export default ContainerLeft;
