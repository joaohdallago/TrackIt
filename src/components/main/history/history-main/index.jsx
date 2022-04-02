import styled from "styled-components";

import ContainerMain from "../../theme/containerMain";

const HistoryMain = () => {
    return (
        <ContainerMain>
            <Container>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
        </ContainerMain>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;

    p {
        font-size: 18px;
        line-height: 22px;
    };
`;

export default HistoryMain;