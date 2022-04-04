import styled from "styled-components";

import NewHabitInputs from "./new-habit-inputs";
import NewHabitButtons from "./new-habit-buttons";

const NewHabitModal = ({ setIsModalOpen }) => {
    return (
        <Container>
            <form>
                <NewHabitInputs />
                <NewHabitButtons {...{setIsModalOpen}}/>
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

    form {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default NewHabitModal;