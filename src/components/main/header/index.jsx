import styled from "styled-components";
import { useContext } from 'react';

import UserContext from '../../../contexts/UserContext'

const Header = () => {
    const { user } = useContext(UserContext);
    const { image } = user
     
    return (
        <Container>
            <span>TrackIt</span>
            <img src={image} alt="" />
        </Container>
    )  
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;

    padding: 0 18px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    background-color: #126BA5;

    span {
        font-size: 40px;
        font-family: 'Playball', cursive;

        color: #FFF;
    }

    img {
        width: 51px;
        height: 51px;

        border-radius: 50%;
    }
`;

export default Header;