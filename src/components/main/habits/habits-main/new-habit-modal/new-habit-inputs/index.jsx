import styled from "styled-components";
import { useContext } from "react";

import NewHabitContext from "../../../../../../contexts/NewHabitContext"

import NewHabitCheckboxes from './new-habits-checkboxes';

const NewHabitInputs = () => {
    const { newHabitData, setNewHabitData } = useContext(NewHabitContext);

    return (
        <Container>
            <input
                type="text"
                placeholder="nome do hábito"
                onChange={e => setNewHabitData({...newHabitData, name: e.target.value})}
                value={newHabitData.name}
            />
            <NewHabitCheckboxes />
        </Container>
    )
};

const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        * {
            font-size: 20px;
            
            border-radius: 5px;
        }

        input {
            width: 303px;
            height: 45px;

            text-indent: 11px;

            border: 1px solid #D5D5D5;

            ::placeholder {
                color: #D5D5D5;
            }
        }
`;

export default NewHabitInputs;