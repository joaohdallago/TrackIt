import styled from "styled-components";

import DeleteHabitButton from "./delete-habit-button";
import UserHabitDays from "./user-habit-days";

const UserHabit = ({ habitData }) => {
    const { id, name, days } = habitData;

    return (
        <Container>
            <ContainerHeader>
                <h3>{name}</h3>
                <DeleteHabitButton {...{id}}/>
            </ContainerHeader>
            <UserHabitDays {...{days}}/>
            
        </Container>
    )
};

const Container = styled.div`
    width: 340px;
    height: 91px;

    padding: 13px;

    border-radius: 5px;

    font-size: 20px;

    background-color: #FFF;
`;

const ContainerHeader = styled.div `
    display: flex;
    justify-content: space-between;
`

export default UserHabit;