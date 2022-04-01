import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import LoginFormInputs from './login-form-inputs'
import LoginSignUpButton from '../../login-sign-up-button'

import UserContext from '../../../../contexts/UserContext'
import IsDisabledContext from '../../../../contexts/IsDisabledContext'

const LoginForm = () => {
    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);
    const { setIsDisabled } = useContext(IsDisabledContext);

    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const login = (event) => {
        event.preventDefault();

        setIsDisabled(true)

        const loginPostUrl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

        const promise = axios.post(loginPostUrl, loginData);

        promise.then(response => {
            setUser(response.data);
            navigate('/hoje');
            setIsDisabled(false)        
        });

        promise.catch(() => {
            alert('Houve algum erro...')
            setIsDisabled(false)
        })
    }

    return (
        <form onSubmit={login}>
            <LoginFormInputs {...{loginData, setLoginData}}/>
            <LoginSignUpButton text='Entrar'/>
        </form>
    )
};



export default LoginForm;