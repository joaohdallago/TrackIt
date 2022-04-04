import styled from "styled-components";

import UserHabitDays from "./user-habit-days";

const UserHabit = ({ habitData }) => {
    const { name, days } = habitData;

    return (
        <Container>
            <h3>{name}</h3>
            <UserHabitDays {...{days}}/>
        </Container>
    )
};

const Container = styled.div`
    width: 340px;
    height: 91px;

    border-radius: 5px;

    background: #FFF;
`;

export default UserHabit;