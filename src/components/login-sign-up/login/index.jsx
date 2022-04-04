import { useContext } from 'react';

import ContainerLoginSignUp from "../../../theme/containerLoginSignUp";

import Logo from "../logo ";
import LoginForm from "./login-form";
import LinkToSignUp from "./link-to-sign-up";

import IsDisabledContext from '../../../contexts/IsDisabledContext'

const Login = () => {
    const { isDisabled } = useContext(IsDisabledContext)

    return (
        <ContainerLoginSignUp {...{isDisabled}}>
            <Logo />
            <LoginForm />
            <LinkToSignUp />
        </ContainerLoginSignUp>
    )
}

export default Login;