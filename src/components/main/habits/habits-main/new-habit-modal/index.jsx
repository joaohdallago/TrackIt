import styled from "styled-components";
import axios from "axios";
import { useContext } from 'react';

import NewHabitInputs from "./new-habit-inputs";
import NewHabitButtons from "./new-habit-buttons";

import UserContext from '../../../../../contexts/UserContext'
import NewHabitContext from "../../../../../contexts/NewHabitContext"

const NewHabitModal = ({ setIsModalOpen }) => {
    const { user } = useContext(UserContext);
    const { newHabitData, setNewHabitData} = useContext(NewHabitContext);

    const submitNewHabit = (event) => {
        event.preventDefault();

        if(newHabitData.days.length === 0) {
            alert('Selecione ao menos um dia da semana!')
            
            return;
        }

        const newHabitPostURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                "Authorization": "Bearer " + user.token,
            }
        }

        const promise = axios.post(newHabitPostURL, newHabitData, config);

        promise.then(() => {
            setNewHabitData({name: '', days: []});
            setIsModalOpen(false)
        })

        promise.catch(() => {
            alert('Ops! Houve algum erro...')
            setNewHabitData({name: '', days: []});
        })
    }

    return (
        <Container>
            <form onSubmit={submitNewHabit}>
                <NewHabitInputs />
                <NewHabitButtons {...{setIsModalOpen}}/>
            </form>
        </Container>
    )
};

const Container = styled.div`
    height: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 17px;

    border-radius: 5px;

    background: #FFF;

    form {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default NewHabitModal;