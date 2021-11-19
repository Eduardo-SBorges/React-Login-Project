import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'
import IconLogin from '../assets/svg/icon-user.svg'
import IconSenha from '../assets/svg/icon-password.svg'



const ContainerLeft = () => {

    const ContainerLeft = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    `;

    const ContainerBox = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

    return (
        <ContainerLeft>
            <ContainerBox>
                <Text text='Olá,' margin="0 0 4%" size="60px" />
                <Text text='Para continuar navegando de forma' size="16px" />
                <Text text='segura, efetue o login na rede.' margin="0 0 20%" size="16px" />
                <Text text='Login' size="30px" margin="0 0 9%" />
                <Input margin="0 0 8%" type="text" placeholder='Login' src={IconLogin} alt="login" />
                <Input margin="0 0 24%" type="password" placeholder='Senha' src={IconSenha} alt="password" />
                <Button />
            </ContainerBox>
        </ContainerLeft>
    )
}

export default ContainerLeft;

