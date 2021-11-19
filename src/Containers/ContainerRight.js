import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/img/img1.png'
import whiteLogo from '../assets/img/whiteLogo.png'

const ContainerRight = () => {

    const ContainerRight = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        height: 100%;
        background: url(${img1});
    `;

    const BoxLogo = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin-top: 3%;
    `;

    return (
            <ContainerRight>
                <BoxLogo>
                <img src={whiteLogo} alt="whiteLogo" />
                </BoxLogo>
            </ContainerRight>
    )
}
export default ContainerRight;
