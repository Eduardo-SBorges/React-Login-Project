import React from 'react';
import styled from 'styled-components';
import HomeFooter from '../containers/HomeFooter';
import Weather from '../components/Weather';
import CurrentTime from '../components/CurrentTime';
import Text from '../components/Text';
import blackLogo from '../assets/img/blackLogo.png';
import ballLogoCompasso from '../assets/img/ballLogoCompasso.png';

const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BoxHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
`;

const BoxBlackLogo = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  img {
    width: 100%;
  }
  @media (max-width: 1100px) {
    left: 4%;
    top: 3%;
  }
`;

const BoxBallLogo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  img {
    width: 75%;
  }
  @media (max-width: 940px) {
    img {
      width: 100vw;
      height: 100vh;
    }
    left: -10%;
    bottom: -15%;
  }
`;

const BoxText = styled.div`
  position: absolute;
  right: 0;
  text-align: end;
  margin-right: 11.3%;
  @media (max-width: 1320px) {
    p {
      &:nth-child(even) {
        font-size: 14px;
      }
      &:nth-child(odd) {
        font-size: 36px;
      }
      &:nth-child(1) {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 1100px) {
    p {
      &:nth-child(even) {
        font-size: 14px;
      }
      &:nth-child(odd) {
        font-size: 27px;
      }
      &:nth-child(1) {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 940px) {
    display: none;
  }
`;

const BoxCurrentTime = styled.div`
  position: absolute;
  top: 0;
  margin-top: -1%;
  @media (max-width: 1320px) {
    p {
      &:nth-child(1) {
        font-size: 108px;
      }
      &:nth-child(2) {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

const BoxWeather = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 940px) {
    right: 0%;
    top: 0%;
  }
`;

const BoxFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
`;

const Home = () => {
  return (
    <HomeStyle data-testid="test-Home-component">
      <BoxHome data-testid='test-ContainerHome-component'>
        <BoxBlackLogo>
          <img src={blackLogo} alt='Black Logo Compasso' />
        </BoxBlackLogo>
        <BoxBallLogo>
          <img src={ballLogoCompasso} alt='Ball Logo Compasso' />
        </BoxBallLogo>
        <BoxCurrentTime>
          <CurrentTime />
        </BoxCurrentTime>
        <BoxText>
          <Text
            text='Our mission is'
            size='27px'
            color='#C12D18'
            weight='700'
          />
          <Text text='Nossa missão é' size='18px' color='#222' />
          <Text
            text='to transform the world'
            size='48px'
            color='#C12D18'
            weight='700'
          />
          <Text text='transformar o mundo' size='18px' color='#222' />
          <Text
            text='building digital experiences'
            size='48px'
            color='#C12D18'
            weight='700'
          />
          <Text
            text='construindo experiências digitais'
            size='18px'
            color='#222'
          />
          <Text
            text='that enable our client’s growth'
            size='48px'
            color='#C12D18'
            weight='700'
          />
          <Text
            text='que permitam o crescimento dos nossos clientes'
            size='18px'
            color='#222'
          />
        </BoxText>
      </BoxHome>
      <BoxWeather>
        <Weather />
      </BoxWeather>
      <BoxFooter>
        <HomeFooter />
      </BoxFooter>
    </HomeStyle>
  );
};

export default Home;
