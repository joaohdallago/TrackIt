import axios from 'axios';

import { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';

import UserContext from '../../../../../../../contexts/UserContext'


const DeleteHabitButton = ({ id }) => {
    const { user } = useContext(UserContext);

    const deleteHabit = () => {
        const confirm = window.confirm('Tem certeza que deseja deletar o hábito?');

        if (!confirm) {
            return;
        }

        const deleteHabitURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/' + id;

        const config = {
            headers: {
                Authorization: 'Bearer ' + user.token
            }
        }

        axios.delete(deleteHabitURL, config);
    } 

    return (
        <BsTrash onClick={deleteHabit}/>
    )
};

export default DeleteHabitButton;