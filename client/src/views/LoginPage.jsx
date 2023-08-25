import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginPage = () => {
    return (
        <div style={{display:'flex'}}>
            <LoginForm/>
            <RegisterForm/>
        </div>
    )
}

export default LoginPage
