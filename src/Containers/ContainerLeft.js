import React from 'react';
import styled from 'styled-components';
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

const ContainerLeft = () => {
    return (
        <ContainerLeftX>
            <BoxLogo>
                <img src={whiteLogo} alt="whiteLogo" />
            </BoxLogo>
            <ContainerBox>
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
                    src={IconLogin}
                    alt="login"
                />
                <Input
                    margin="0 0 24%"
                    type="password"
                    placeholder="Senha"
                    src={IconSenha}
                    alt="password"
                />
                <Button />
            </ContainerBox>
        </ContainerLeftX>
    );
};

export default ContainerLeft;