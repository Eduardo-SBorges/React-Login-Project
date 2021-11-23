import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import Timer from '../components/Timer';

const BoxFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5%;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
`;

const Line = styled.div`
  color: #fff;
  font-size: 60px;
  margin-top: 1%;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BoxTextA = styled.div`
  text-align: end;
  margin-left: 14%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BoxTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  gap: 20%;
  margin-right: 20%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BoxTextB = styled.div`
  text-align: end;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BoxButtons = styled.div`
display: flexbox;
justify-content: end;
align-self: stretch;
margin-right: 4%;
@media (max-width: 768px) {
  display: flex;
    flex-direction: row-reverse;
  }
`

const Continue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 65%;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 80vw;
    height: 13vh;
  }
`;

const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  @media (max-width: 768px) {
    width: 20vw;
    height: 13vh;
  }
`;

function Footer() {
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
          <Text text="Logout" size="12px" weight="700" margin="0 50px 0 50px" />
        </LogOut>
        </BoxButtons>
      </BoxFooter>
    </>
  );
}

export default Footer;
