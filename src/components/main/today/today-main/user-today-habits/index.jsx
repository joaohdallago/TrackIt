import styled from "styled-components";
import axios from "axios";

import { useState, useEffect, useContext } from "react";

import UserTodayHabit from './user-today-habit';

import UserContext from '../../../../../contexts/UserContext'

const UserTodayHabits = () => {
    const { user } = useContext(UserContext);

    const [ todayHabitList, setTodayHabitList ] = useState([]);

    useEffect(() => {
        const getTodayHabitListURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

        const config = {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        };

        const promise = axios.get(getTodayHabitListURL, config);

        promise.then(response => setTodayHabitList(response.data))
    }, [todayHabitList])

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