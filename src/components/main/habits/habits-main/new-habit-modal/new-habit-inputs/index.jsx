import styled from "styled-components";

import HabitNameInput from './habit-name-input'
import NewHabitCheckboxes from './new-habits-checkboxes';

const NewHabitInputs = () => {  
    return (
        <Container>
            <HabitNameInput />
            <NewHabitCheckboxes />
        </Container>
    )
};

const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        * {
            font-size: 20px;
            
            border-radius: 5px;
        }
`;

export default NewHabitInputs;