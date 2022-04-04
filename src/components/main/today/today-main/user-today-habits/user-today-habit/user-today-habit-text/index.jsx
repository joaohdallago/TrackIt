import styled from 'styled-components'

const UserTodayHabitText = ({ habitData }) => {
    const { name } = habitData;
    
    return (
        <Container>
            <h3>{name}</h3>
        </Container>
        
    );
}

const Container = styled.div`
    h3 {
        font-size: 20px;
    }
`;

export default UserTodayHabitText;