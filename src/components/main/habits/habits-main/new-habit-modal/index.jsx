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
        const newHabitPostURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: {
                "Authorization": "Bearer " + user.token,
            }
        }

        const promise = axios.post(newHabitPostURL, newHabitData, config);

        promise.then(reponse => {
            console.log(reponse);
            setNewHabitData({name: '', days: []});
        })

        promise.catch(err => {
            console.log(err);
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