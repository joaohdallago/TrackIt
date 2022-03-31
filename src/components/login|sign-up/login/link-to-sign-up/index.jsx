import { Link } from "react-router-dom"
import styled from "styled-components";

const LinkToSignUp = () => {
    return (
        <Container>
            <Link to={'/cadastro'}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </Container>
    )
}

const Container = styled.div`
    a {
        font-size: 13.976px;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`;

export default LinkToSignUp;