import styled from "styled-components";
import { Link } from 'react-router-dom'

import ProgressBar from './progress-bar';

const Footer = () => {
    return (
        <Container>
            <Link to="/habitos">Hábitos</Link>
            <ProgressBar />
            <Link to="/historico">Histórico</Link>
        </Container>   
    )
};

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 70px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: #fff;

    a {
        font-size: 18px;

        color: #52B6FF;
    }
`;

export default Footer;