import React, { useState, useEffect } from "react";
import Text from "./Text";

const Timer = ({ s }) => {
  const [seconds, setSeconds] = useState(s);
  //   const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    // if (isActive) {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    // }

    if (seconds === 0) {
      alert("End of Session!");
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <Text text={seconds} size="48px" />
      <Text text='Seconds' size="14px" weight="700" />
    </>
  );
};

export default Timer;
