import styled from 'styled-components'

const UserTodayHabitText = ({ habitData }) => {
    const { name, done, currentSequence, highestSequence } = habitData;
    
    const isRecord = currentSequence === highestSequence;

    const sequenceStyle = {
        color: done ? '#8FC549' : ''
    }

    const recordStyle = {
        color: (done && currentSequence === highestSequence) ? '#8FC549' : '' 
    }

    return (
        <Container {...{isRecord}}>
            <h3>{name}</h3>
            <div>
                <span>
                    Sequência atual: <em style={sequenceStyle}>{currentSequence} dias</em>
                </span> 
                
                <span>
                    Seu recorde: <em style={recordStyle}>{highestSequence} dias</em>
                </span>
            </div>
        </Container>
        
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    

    h3 {
        font-size: 20px;
    }

    div {
        display: flex;
        flex-direction: column;

        font-size: 13px;
    }
`;

export default UserTodayHabitText;