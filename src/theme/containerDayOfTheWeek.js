import styled from "styled-components";

const ContainerDayOfTheWeek = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #D5D5D5;

    border-radius: 5px;

    color: #D5D5D5;

    ${({isChecked}) => isChecked && `
        color: #FFF;
        background-color: #CFCFCF;
    `}
`;

export default ContainerDayOfTheWeek;