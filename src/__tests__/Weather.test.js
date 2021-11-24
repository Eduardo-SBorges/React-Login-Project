import * as React from 'react';
import Weather from '../components/Weather';
import { getWeather } from '../api/api';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("[Weather's Component] must render in Home.js.", () => {
  test("[Weather's Component] must show the location of Porto Alegre - RS.", async () => {
    const component = render(<Weather />);
    render(<Weather />);

    let weather = await getWeather(-30.0331, -51.23);

    if (weather.name === 'Porto Alegre') return true;
  });

  test("[Weather's Component] must have CSS's styles.", () => {
    const component = render(<Weather />);

    expect(component.getByTestId('test-Weather-component')).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      margin: '25px 41px',
    });
  });
});
