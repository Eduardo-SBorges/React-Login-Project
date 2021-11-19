import React from "react";
import Text from "./Text";
import styled from "styled-components";

const CurrentTime = () => {
  const newDate = new Date();

  const hours = newDate.getHours();
  const minutes = newDate.getUTCMinutes();
  const time = `${hours < 10 && "0"}${hours}:${minutes}`;

  const day = newDate.getDate();
  let week = newDate.getDay() -1;

  switch (week) {
    case 0:
      week = "segunda-feira"
      break;
    case 1:
      week = "terça-feira"
      break;
    case 2:
      week = "quarta-feira"
      break;
    case 3:
      week = "quinta-feira"
      break;
    case 4:
      week = "sexta-feira"
      break;
    case 5:
      week = "sábado"
      break;
    case 6:
      week = "domingo"
      break;
    default:
  }

  let month = newDate.getMonth();

  switch (month) {
  case 0:
    month = 'January';
    break;
  case 1:
    month = 'February';
    break;
  case 2:
    month = 'March';
    break;
  case 3:
    month = 'April';
    break;
  case 4:
    month = 'May';
    break;
  case 5:
    month = 'June';
    break;
  case 6:
    month = 'July';
    break;
  case 7:
    month = 'August';
    break;
  case 8:
    month = 'September';
    break;
  case 9:
    month = 'October';
    break;
  case 10:
    month = 'November';
    break;
  case 11:
    month = 'December';
    break;
    default:
}

  const year = newDate.getFullYear();
  
  const date = `${week}, ${day} de ${month} de ${year}`;

  const Box = styled.div`
    text-align: center;
  `;

  return (
    <Box>
      <Text text={time} size="144px" color="#222" margin="0" weight="700" />
      <Text text={date} size="14px" color="#222" margin="-40px 0 0 0" />
    </Box>
  );
};

export default CurrentTime;
