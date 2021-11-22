import React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import Timer from "../components/Timer";

const BoxFooter = styled.footer`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  width: 100%;
  height: 10%;
`;

const LeftFooter = styled.div`
  width: 45%;
`;

const RightFooter = styled.div`
  width: 65%;
`;

const Line = styled.div`
  width: 61px;
  height: 0px;
  left: 930px;
  top: 998px;

  /* Primária */

  border: 1px solid #ffffff;
  transform: rotate(90deg);
`;

const BoxText = styled.div`
  position: absolute;
  right: 0;
`;
function Footer() {
  let text =
    "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.";
  return (
    <>
      <BoxFooter>
        <LeftFooter>
          <BoxText>
            <Text text={text} weight="normal" />
            <Line />
          </BoxText>
        </LeftFooter>
        <RightFooter>
          <Text text="Application refresh in" />
          <Timer s={600} />
        </RightFooter>
      </BoxFooter>
    </>
  );
}

export default Footer;
