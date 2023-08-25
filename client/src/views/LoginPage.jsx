import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginPage = () => {
    return (
        <div style={{ display: 'flex', marginTop:'8%', justifyContent:'center'}}>
            <div className='border rounded p-5 m-3' style={{width:'25%'}}>
                <LoginForm />
            </div>
            <div className='border rounded p-5 m-3' style={{width:'25%'}}>
                <RegisterForm />
            </div>

        </div>
    )
}

export default LoginPage
