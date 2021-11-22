import React from 'react';
import styled from 'styled-components';
import { getWeather } from '../API/api';

const Weather = () => {
  const [weather, setWeather] = React.useState(false);

  const Climate = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 41px;
  `;
  const Location = styled.span`
    font-size: 14px;
    line-height: 18px;
    width: 119px;
    text-align: center;
    font-family: 'Mark Pro', sans-serif;
  `;
  const TemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 119px;
  `;
  const Temperature = styled.span`
    font-size: 48px;
    font-weight: bold;
    margin-left: 4px;
    font-family: 'Mark Pro', sans-serif;
  `;
  const ClimateIcon = styled.img`
    width: 40.78px;
    height: 48.58px;
  `;
  React.useEffect(() => {
    getWeather(-30.0331, -51.23).then((data) => setWeather(data));
  }, []);

  return (
    <Climate data-testid="test-Weather-component">
      {weather && (
        <>
          <Location> {weather['name']} - RS</Location>
          <TemperatureContainer>
            <ClimateIcon
              src={`http://openweathermap.org/img/w/${weather['weather'][0]['icon']}.png`}
              alt="img"
            />
            <Temperature> {weather['main']['temp'].toFixed(0)}°</Temperature>
          </TemperatureContainer>
        </>
      )}
    </Climate>
  );
};

export default Weather;
