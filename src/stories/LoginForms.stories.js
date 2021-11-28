import LoginForms from "../containers/LoginForms";
import React from 'react';

export default {
    title: "Containers/LoginForms",
    component: LoginForms,
}

const Template = (args) => <LoginForms {...args} />;

export const LoginForm = Template.bind({});
LoginForm.args = {};