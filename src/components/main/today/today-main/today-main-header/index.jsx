import styled from "styled-components";

import FormattedDay from './FormattedDay'

const TodayMainHeader = () => {
    return (
            <Container>
                <FormattedDay />
                <span>Nenhum hábito concluído ainda</span>
            </Container>
    )
};

const Container = styled.div`
    font-size: 18px;

    color: #BABABA;
`;

export default TodayMainHeader;