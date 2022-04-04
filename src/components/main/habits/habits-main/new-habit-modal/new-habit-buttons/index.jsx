import styled from "styled-components";

const NewHabitButtons = ({ setIsModalOpen }) => {
    return (
        <Container>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            <button type='submit'>Salvar</button>
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

        font-size: 15.976px;

        color: #52B6FF;
        
        border-radius: 5px;
    }

    button[type="submit"] {
        color: #FFF;
        background-color: #52B6FF;
    }
`;

export default NewHabitButtons;