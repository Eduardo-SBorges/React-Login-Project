import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import Timer from '../components/Timer';
import { useNavigate } from 'react-router-dom';

const BoxFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13vh;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
`;

const Line = styled.div`
  color: #fff;
  font-size: 60px;
  width: 5%;
  margin-top: 1%;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-right: 2%;
  @media (max-width: 940px) {
    display: none;
  }
`;

const BoxTextA = styled.div`
  text-align: end;
  margin-left: 10%;
  width: 45%;
  @media (max-width: 940px) {
    display: none;
  }
`;

const BoxTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21%;
  margin-right: 12%;
  @media (max-width: 940px) {
    display: none;
  }
`;

const BoxTextB = styled.div`
  text-align: end;
  width: 40%;
  @media (max-width: 940px) {
    display: none;
  }
`;

const BoxButtons = styled.div`
display: flexbox;
justify-content: end;
width: 30%;
align-self: stretch;
@media (max-width: 940px) {
  display: flex;
    flex-direction: row-reverse;
    width: 100%;
  }
`

const Continue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background-color: #fff;
  cursor: pointer;
  @media (max-width: 940px) {
    width: 100%;
    height: 13vh;
  }
`;

const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  @media (max-width: 940px) {
    width: 25%;
    height: 13vh;
  }
`;

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigate = () => navigate('/');
  

  return (
    <>
      <BoxFooter>
        <BoxTextA>
          <Text
            text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a"
            size="12px"
            weight="normal"
          />
          <Text
            text="aberta em segundo plano e abra uma nova janela para continuar a navegar."
            size="12px"
            weight="normal"
          />
        </BoxTextA>
        <Line>|</Line>
        <BoxTimer>
          <BoxTextB>
            <Text text="Application" size="14px" />
            <Text text="refresh in" size="14px" />
          </BoxTextB>
          <Timer s={600} />
        </BoxTimer>
        <BoxButtons>
          <Continue>
            <Text text="Continuar" size="12px" color="#C13216" />
            <Text text="Navegando" size="12px" color="#C13216" />
          </Continue>
          <LogOut>
            <Text text="Logout" size="12px" weight="700" onClick={handleNavigate}/>
          </LogOut>
        </BoxButtons>
      </BoxFooter>
    </>
  );
}

export default Footer;