import React from "react";
import Text from "./Text";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
  text-align: center;
`;

const CurrentTime = ({ customMargin }) => {
  const newDate = new Date();

  const hours = newDate.getHours();
  const [minutes, setMinutes] = React.useState(newDate.getUTCMinutes());
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setMinutes(newDate.getUTCMinutes());
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, newDate]);

  const time = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  const day = newDate.getDate();
  let week = newDate.getDay() - 1;

  switch (week) {
    case -1:
      week = "domingo";
      break;
    case 0:
      week = "segunda-feira";
      break;
    case 1:
      week = "terça-feira";
      break;
    case 2:
      week = "quarta-feira";
      break;
    case 3:
      week = "quinta-feira";
      break;
    case 4:
      week = "sexta-feira";
      break;
    case 5:
      week = "sábado";
      break;
    default:
  }

  let month = newDate.getMonth();

  switch (month) {
    case 0:
      month = "Janeiro";
      break;
    case 1:
      month = "Fevereiro";
      break;
    case 2:
      month = "Março";
      break;
    case 3:
      month = "Abril";
      break;
    case 4:
      month = "Maio";
      break;
    case 5:
      month = "Junho";
      break;
    case 6:
      month = "Julho";
      break;
    case 7:
      month = "Agosto";
      break;
    case 8:
      month = "Setembro";
      break;
    case 9:
      month = "Outubro";
      break;
    case 10:
      month = "Novembro";
      break;
    case 11:
      month = "Dezembro";
      break;
    default:
  }

  const year = newDate.getFullYear();

  const date = `${week}, ${day} de ${month} de ${year}`;

  return (
    <Box data-testid="test-CurrentTime-component">
      <Text text={time} size="144px" color="#222" margin="0" weight="700" />
      <Text text={date} size="14px" color="#222" margin={customMargin} />
    </Box>
  );
};

CurrentTime.propTypes = {
  customMargin: PropTypes.string,
};

CurrentTime.defaultProps = {
  customMargin: "-13% 0 0 0",
};

export default CurrentTime;
