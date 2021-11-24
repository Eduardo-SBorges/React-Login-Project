import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Text from './Text';

const BoxTimer = styled.div`
  text-align: center;
`;

const TextA = styled.div`
  width: 90px;
  margin-top: -10%;
`;


const Timer = ({ s }) => {
  const [seconds, setSeconds] = useState(s);
  //   const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let interval = null;
    // if (isActive) {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    // }

    if (seconds === 0) {
      navigate('/')
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <BoxTimer>
        <Text text={`${seconds}`} size="48px" />
        <TextA>
          <Text text="Seconds" size="14px" />
        </TextA>
      </BoxTimer>
    </>
  );
};

export default Timer;