import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";

import TodayHabitsContext from '../../../../contexts/TodayHabitsContext'

const ProgressBar = () => {
    const { todayHabitList } = useContext(TodayHabitsContext)

    const doneHabitsList = todayHabitList.filter(habit => habit.done)

    const percentage = doneHabitsList.length * 100 /todayHabitList.length;

    

    return (
        <Container>
            <Link to="/hoje">
                <CircularProgressbar
                    value={percentage}
                    text='Hoje'
                    backgroundPadding={5}
                    background
                    styles={buildStyles({
                        
                        textSize: '18px',
                    
                        pathTransitionDuration: 0.5,
                    
                        pathColor: '#fff',
                        textColor: '#fff',
                        trailColor: 'transparent',
                        backgroundColor: '#52B6FF',
                        })}
                />
            </Link>
        </Container>
    )
};

const Container = styled.div`
    width: 100px;

    margin-top: -40px;
`;

export default ProgressBar;