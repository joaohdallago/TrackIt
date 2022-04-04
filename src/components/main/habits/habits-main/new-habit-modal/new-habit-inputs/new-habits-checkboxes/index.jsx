import styled from "styled-components";

import NewHabitCheckbox from "./new-habit-checkbox";


const NewHabitCheckboxes = () => {
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <Container>
            {daysOfTheWeek.map((dayInitial, index) => <NewHabitCheckbox {...{dayInitial, index}}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 4px;
`;

export default NewHabitCheckboxes;