import styled from "styled-components";
import { useState } from 'react';

const NewHabitCheckbox = ({ dayInitial }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <Container
            {...{isChecked}}
            onClick={() => setIsChecked(!isChecked)}
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