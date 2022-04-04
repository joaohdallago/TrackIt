import styled from "styled-components";
import { useContext } from 'react';

import UserTodayHabit from './user-today-habit';

import TodayHabitsContext from '../../../../../contexts/TodayHabitsContext'

const UserTodayHabits = () => {
    const { todayHabitList } = useContext(TodayHabitsContext);
    return (
        <Container>
            {
                todayHabitList.map(habitData => <UserTodayHabit {...{habitData}}/>)
            }
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 28px;
`;

export default UserTodayHabits;