import { useContext } from 'react';

import NewHabitContext from '../../../../../../../../contexts/NewHabitContext';

import ContainerDayOfTheWeek from '../../../../../../../../theme/containerDayOfTheWeek';

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
        <ContainerDayOfTheWeek
            {...{isChecked}}
            onClick={checkDay}
        >
            {dayInitial}
        </ContainerDayOfTheWeek>
    )
};

export default NewHabitCheckbox;