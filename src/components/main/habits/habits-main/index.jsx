import styled from "styled-components";
import { useState } from "react";

import ContainerMain from "../../../../theme/containerMain";


import NewHabitModal from './new-habit-modal';
import UserHabits from './user-habits'

const HabitsMain = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <ContainerMain>
            <Container>
                <header>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setIsModalOpen(true)}>
                        +
                    </button>
                </header>  
                
                {isModalOpen && <NewHabitModal {...{setIsModalOpen}}/>}

                <UserHabits />
            </Container>
        </ContainerMain>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 40px;
            height: 35px;

            border-radius: 5px;

            font-size: 27px;

            color: #fff;
            background-color: #52B6FF;
        }
    };
`;

export default HabitsMain;