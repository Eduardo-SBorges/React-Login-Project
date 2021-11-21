import React from 'react'
import styled from 'styled-components'
import ContainerLeft from '../Containers/ContainerLeft';
import ContainerRight from '../Containers/ContainerRight';

const Login = () => {

    const ContainerStyled = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
        color: #fff;
        height: 100vh;
    `;

    return (
        <ContainerStyled>
            <ContainerLeft />
            <ContainerRight />
        </ContainerStyled>
    )
}

export default Login