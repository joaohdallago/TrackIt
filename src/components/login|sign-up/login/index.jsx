import styled from "styled-components";

import Logo from "../logo ";
import LoginForm from "./login-form";
import LinkToSignUp from "./link-to-sign-up";

const Login = () => {
    return (
        <Container>
            <Logo />
            <LoginForm />
            <LinkToSignUp />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Login;