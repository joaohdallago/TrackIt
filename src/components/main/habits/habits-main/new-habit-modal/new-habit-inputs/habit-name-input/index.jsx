import styled from "styled-components";
import { useContext } from 'react';

import NewHabitContext from "../../../../../../../contexts/NewHabitContext"
import IsDisabledContext from "../../../../../../../contexts/IsDisabledContext"

const HabitNameInput = () => {
    const { newHabitData, setNewHabitData } = useContext(NewHabitContext);
    const { isDisabled } = useContext(IsDisabledContext);
    
    return (
            <StyledInput
                type="text"
                placeholder="nome do hábito"
                onChange={e => setNewHabitData({...newHabitData, name: e.target.value})}
                value={newHabitData.name}
                disabled={isDisabled}
                required
            />
    )
};

const StyledInput = styled.input`
    width: 303px;
    height: 45px;

    text-indent: 11px;

    border: 1px solid #D5D5D5;

    ::placeholder {
        color: #D5D5D5;

        ${({disabled}) => disabled && 'color: #B3B3B3'}
    }

    ${({disabled}) => disabled && `
        background-color: #F2F2F2;
        border: 1px solid #D4D4D4;
    `}
`;


export default HabitNameInput;