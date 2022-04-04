import styled from "styled-components";
import { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import IsDisabledContext from '../../../../../../contexts/IsDisabledContext'

const NewHabitButtons = ({ setIsModalOpen }) => {
    const { isDisabled } = useContext(IsDisabledContext);

    return (
        <Container {...{isDisabled}}>
            <button
                onClick={() => setIsModalOpen(false)}
                disabled={isDisabled}
            >
                Cancelar
            </button>

            <button
                type='submit'
                disabled={isDisabled}
            >
                {
                isDisabled ?
                    <ThreeDots
                        height="50"
                        width="50"
                        color='#fff'
                        ariaLabel='loading'
                    />
                :
                    'Salvar'
            }
            </button>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
        width: 84px;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 15.976px;

        color: #52B6FF;
        
        border-radius: 5px;

        ${({ isDisabled }) => isDisabled && 'opacity: 0.5;'}
    }

    button[type="submit"] {
        color: #FFF;
        background-color: #52B6FF;
    }
`;

export default NewHabitButtons;