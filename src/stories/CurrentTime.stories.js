import CurrentTime from '../components/CurrentTime'
import React from 'react';

export default{
    title: "Components/CurrentTime",
    component: CurrentTime,
}

const Template = (args) => <CurrentTime {...args} />

export const MainCurrentTime = Template.bind({});

MainCurrentTime.args = {
    customMargin: "0 0 0 0"
}
