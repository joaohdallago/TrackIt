import ContainerLoginSignUp from "../theme/containerLoginSignUp";

import Logo from "../logo ";
import LoginForm from "./login-form";
import LinkToSignUp from "./link-to-sign-up";

const Login = () => {
    return (
        <ContainerLoginSignUp>
            <Logo />
            <LoginForm />
            <LinkToSignUp />
        </ContainerLoginSignUp>
    )
}

export default Login;