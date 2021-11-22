import React from 'react';
import styled from 'styled-components';
import useError from '../hooks/useError';
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

const ContainerLeft = ({ error, value }) => {
  const email = useError('email');
  const password = useError('password');

  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    if ((email.error, password.error)) {
      setErrorMessage('Ops, e-mail e senha inválida!');
    } else {
      if (email.error === 'email') {
        setErrorMessage('Ops, e-mail inválido!');
      }
      if (password.error === 'password') {
        setErrorMessage('Ops, senha inválida!');
      }
    }
    if (!email.error && !password.error) {
      setErrorMessage('');
    }
    if (email.error && !password.error) {
      setErrorMessage('Ops, e-mail inválido!');
    }
    if (!email.error && password.error) {
      setErrorMessage('Ops, senha inválida!');
    }
  }, [email, password]);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      email.validate() &&
      password.validate() &&
      password.value === 'React@2021' &&
      email.value === 'email.usuario@compasso.com.br'
    ) {
    } else {
      if (
        password.value !== 'React@2021' &&
        email.value !== 'email.usuario@compasso.com.br'
      ) {
        setErrorMessage('Ops, e-mail e senha inválida!');
      }
      if (email.value !== 'email.usuario@compasso.com.br') {
        setErrorMessage('Ops, e-mail inválido!');
      }
      if (password.value !== 'React@2021') {
        setErrorMessage('Ops, senha inválida!');
      }
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
            borderColor={email.error ? '#E9B425' : '#fff'}
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
            borderColor={password.error ? '#E9B425' : '#fff'}
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
