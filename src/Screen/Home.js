import React from 'react'
import styled from 'styled-components';
import ContainerHome from '../Containers/LayoutHome';

const HomeStyle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;

const Home = () => {

    return (
        <HomeStyle>
            <ContainerHome />
        </HomeStyle>
    )
}

export default Home;
