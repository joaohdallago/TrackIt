import styled from "styled-components";

import NewHabitInputs from "./new-habit-inputs";
import NewHabitButtons from "./new-habit-buttons";

const NewHabitModal = () => {
    return (
        <Container>
            <form>
                <NewHabitInputs />
                <NewHabitButtons />
            </form>
        </Container>
    )
};

const Container = styled.div`
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 17px;

    border-radius: 5px;

    background: #FFF;

`;

export default NewHabitModal;