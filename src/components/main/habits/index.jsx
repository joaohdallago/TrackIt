import axios from 'axios';
import { useContext, useEffect } from 'react'

import Header from "../header";
import HabitsMain from "./habits-main"
import Footer from "../footer";

import UserContext from '../../../contexts/UserContext';
import TodayHabitsContext from '../../../contexts/TodayHabitsContext'

const Habits = () => {
    const { user } = useContext(UserContext);
    const { todayHabitList, setTodayHabitList } = useContext(TodayHabitsContext);

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
        <>
            <Header />
            <HabitsMain />
            <Footer />
        </>
    )
};

export default Habits;