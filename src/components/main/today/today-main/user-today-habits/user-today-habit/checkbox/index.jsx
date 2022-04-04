import styled from "styled-components"
import { BsCheckLg } from 'react-icons/bs'
import { useContext } from 'react';

import UserContext from '../../../../../../../contexts/UserContext'
import axios from "axios";

const Checkbox = ({ habitData }) => {
    const { user } = useContext(UserContext);

    const { id, done } = habitData;

    const checkTheBox = () => {
        const config = {
            headers: {
                "Authorization": "Bearer " + user.token
            }
        }

        if (done) {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

            axios.post(url, {}, config);

        } else {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

            axios.post(url, {}, config);
        }
    }
    
    return (
        <Container {...{done}} onClick={checkTheBox}>
            <BsCheckLg style={{
                color: '#fff',
                fontSize: '35px'
            }}/>
        </Container>
    )
}

const Container = styled.div`
    width: 69px;
    height: 69px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #E7E7E7;

    border-radius: 5px;

    background-color: #EBEBEB;

    ${({ done }) => done && 'background-color: #8FC549'}
`;

export default Checkbox 