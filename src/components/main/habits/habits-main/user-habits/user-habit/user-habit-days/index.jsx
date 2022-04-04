import styled from "styled-components";

import UserHabitDay from "./user-habit-day";

const UserHabitDays = ({ days }) => {
    const daysOfTheWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Container>
            {
                daysOfTheWeek.map((dayInitial, index) => <UserHabitDay {...{dayInitial, index, days}}/>)
            }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 4px;
`;

export default UserHabitDays;