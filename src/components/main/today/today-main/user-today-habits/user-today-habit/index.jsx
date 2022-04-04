import styled from "styled-components";

import UserTodayHabitText from "./user-today-habit-text";
import Checkbox from "./checkbox";

const UserTodayHabit = ({ habitData }) => {

    return(
        <Container>
            <UserTodayHabitText {...{habitData}} />
            <Checkbox {...{habitData}}/>
        </Container>
    )
};

const Container = styled.div`
    width: 340px;
    height: 94px;

    display: flex;
    justify-content: space-between;

    padding: 13px;

    border-radius: 5px;

    background-color: #FFF;
`;

export default UserTodayHabit;