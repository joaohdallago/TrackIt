import axios from 'axios';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import SignUpFormInputs from './sign-up-form-inputs';
import LoginSignUpButton from '../../login-sign-up-button'

import IsDisabledContext from '../../../../contexts/IsDisabledContext';

const SignUpForm = () => {
    const navigate = useNavigate()

    const { setIsDisabled } = useContext(IsDisabledContext)

    const [signUpData, setSignUpData] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    )

    const signUp = (event) => {
        event.preventDefault();

        setIsDisabled(true)
    
        const signUpPostUrl = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    
        const promise = axios.post(signUpPostUrl, signUpData);
    
        promise.then(() => {
            navigate('/')
            setIsDisabled(false)
        })
    
        promise.catch(() => {
            alert('Houve algum erro...')
            setIsDisabled(false)
        })
    }

    return (
        <form onSubmit={signUp}>
            <SignUpFormInputs {...{signUpData, setSignUpData}}/>
            <LoginSignUpButton text={'Cadastrar'}/>
        </form>
    )
}

export default SignUpForm;

