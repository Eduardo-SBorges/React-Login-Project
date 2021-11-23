import React from 'react';
import styled from 'styled-components';
import CurrentTime from '../components/CurrentTime';
import Text from '../components/Text';
import blackLogo from '../assets/img/blackLogo.png';
import ballLogoCompasso from '../assets/img/ballLogoCompasso.png';

const BoxHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);;
`;

const BoxBlackLogo = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  img {
    width: 100%;
  }
`;

const BoxBallLogo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  img {
    width: 60%;
  }
`;

const BoxText = styled.div`
  position: absolute;
  right: 0;
  text-align: end;
  margin-right: 5%;
`;

const BoxCurrentTime = styled.div`
  position: absolute;
  top: 2%;
`;

const ContainerHome = () => {

  return (
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
            <Text 
              text='Nossa missão é' 
              size='18px' 
              color='#222' 
            />
            <Text
              text='to transform the world'
              size='48px'
              color='#C12D18'
              weight='700'
            />
            <Text 
              text='transformar o mundo' 
              size='18px' 
              color='#222' 
            />
            <Text
              text='building digital experiences'
              size='24px'
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
  );
};

export default ContainerHome;
