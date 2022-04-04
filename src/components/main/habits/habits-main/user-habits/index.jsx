import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from 'react';

import UserHabit from './user-habit';

import UserContext from '../../../../../contexts/UserContext';

const UserHabits = () => {
    const { user } = useContext(UserContext);

    const [ userHabitList, setUserHabitList ] = useState([]);

    useEffect(() => {
        const userHabitsGetURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const config = {
            headers: {
                "Authorization": "Bearer " + user.token
            }
        }

        const promise = axios.get(userHabitsGetURL, config);

        promise.then(response => setUserHabitList(response.data))
    }, [userHabitList]);

    return (
        <Container>
            {
                userHabitList.length !== 0 ?
                    userHabitList.map(habitData => <UserHabit {...{habitData}}/>)
                :
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
            }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default UserHabits;