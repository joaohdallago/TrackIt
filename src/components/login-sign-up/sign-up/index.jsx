import { useContext } from 'react';

import ContainerLoginSignUp from "../../../theme/containerLoginSignUp";

import Logo from "../logo ";
import SignUpForm from "./sign-up-form";
import LinkToLogin from "./link-to-login"

import IsDisabledContext from '../../../contexts/IsDisabledContext'

const SignUp = () => {
    const { isDisabled } = useContext(IsDisabledContext);

    return (
        <ContainerLoginSignUp {...{isDisabled}}>
            <Logo />
            <SignUpForm />
            <LinkToLogin />
        </ContainerLoginSignUp>
    )
}

export default SignUp;