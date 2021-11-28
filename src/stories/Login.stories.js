import Login from "../screen/Login";
import React from 'react';

export default {
    title: "Screens/Login",
    component: Login
}

const Template = (args) => <Login {...args} />;

export const MainLogin = Template.bind({});
MainLogin.args = {};