import styled from "styled-components";

import ContainerMain from "../../theme/containerMain";

import FormattedDay from './FormattedDay'

const TodayMain = () => {
    return (
        <ContainerMain>
            <Container>
                <FormattedDay />
                <span>Nenhum hábito concluído ainda</span>
            </Container>
        </ContainerMain>
    )
};

const Container = styled.div`
    font-size: 18px;

    color: #BABABA;
`;

export default TodayMain;