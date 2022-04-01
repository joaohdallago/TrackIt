import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import styled from "styled-components";

const Footer = () => {
    const percentage = 66;

    return (
        <Container>
            <ContainerProgressbar>
                <CircularProgressbar
                    value={percentage}
                    text='Hoje'
                    backgroundPadding={5}
                    background
                    styles={buildStyles({
                        
                        textSize: '18px',
                    
                        pathTransitionDuration: 0.5,

                    
                        pathColor: '#fff',
                        textColor: '#fff',
                        trailColor: 'transparent',
                        backgroundColor: '#52B6FF',
                      })}
                    
                />
            </ContainerProgressbar>
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
    justify-content: center;

    background-color: #fff;
`;

const ContainerProgressbar = styled.div`
    position: absolute;
    top: -40px;

    width: 100px;
`;

export default Footer;