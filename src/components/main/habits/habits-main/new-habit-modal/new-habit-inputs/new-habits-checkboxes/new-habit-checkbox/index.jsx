import styled from "styled-components";
import { useContext } from 'react';

import NewHabitContext from '../../../../../../../../contexts/NewHabitContext';

const NewHabitCheckbox = ({ dayInitial, index }) => {
    const { newHabitData, setNewHabitData } = useContext(NewHabitContext);
    const { days } = newHabitData;

    const isChecked = days.includes(index)


    const checkDay = () => {

        if (isChecked) {
            setNewHabitData({...newHabitData, days: [...days].filter(day => day !== index).sort()})
        } else { 
            setNewHabitData({...newHabitData, days: [...days, index].sort()})
        }
    };

    return (
        <Container
            {...{isChecked}}
            onClick={checkDay}
        >
            {dayInitial}
        </Container>
    )
}

const Container = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #D5D5D5;

    color: #D5D5D5;

    ${({isChecked}) => isChecked && `
        color: #FFF;
        background-color: #CFCFCF;
    `}
`;

export default NewHabitCheckbox;