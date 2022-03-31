import ContainerLoginSignUp from "../theme/containerLoginSignUp";

import Logo from "../logo ";
import SignUpForm from "./sign-up-form";
import LinkToLogin from "./link-to-login"

const SignUp = () => {
    return (
        <ContainerLoginSignUp>
            <Logo />
            <SignUpForm />
            <LinkToLogin />
        </ContainerLoginSignUp>
    )
}

export default SignUp;