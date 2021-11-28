import LoginImages from "../containers/LoginImages";
import React from 'react';

export default {
    title: "Containers/LoginImages",
    component: LoginImages,
}

const Template = (args) => <LoginImages {...args} />;

export const MainLoginImages = Template.bind({});
MainLoginImages.args = {};