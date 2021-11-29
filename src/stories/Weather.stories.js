import Weather from '../components/Weather';
import React from 'react';

export default {
    title: "Components/Weather",
    component: Weather,
}

const Template = (args) => <Weather {...args} />;

export const MainWeather = Template.bind({});
MainWeather.args = {};