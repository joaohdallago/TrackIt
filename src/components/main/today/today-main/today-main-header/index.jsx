import styled from "styled-components";
import { useContext } from "react";

import FormattedDay from './FormattedDay'

import TodayHabitsContext from '../../../../../contexts/TodayHabitsContext'

const TodayMainHeader = () => {
    const { todayHabitList } = useContext(TodayHabitsContext);

    const doneHabitsList = todayHabitList.filter(habit => habit.done)

    const percentage = (doneHabitsList.length * 100 /todayHabitList.length).toFixed(0);

    return (
            <Container>
                <FormattedDay />
                {
                    percentage === 0 ?
                        <span>
                            Nenhum hábito concluído ainda
                        </span>
                    :
                        <span style={{ color: '#8FC549'}}>
                            {percentage}% dos hábitos concluídos
                        </span>
                }
            </Container>
    )
};

const Container = styled.div`
    font-size: 18px;

    color: #BABABA;
`;

export default TodayMainHeader;