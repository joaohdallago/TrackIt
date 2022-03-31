import styled from "styled-components";

import logoSrc from "../../../assets/logo.png"

const Logo = () => {
    return (
        <Container>
            <img src={logoSrc} alt="logo" />
        </Container>
    )
}

const Container = styled.div`
    img {
        width: 180px;
    }
`;

export default Logo;