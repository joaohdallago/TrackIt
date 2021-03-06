import styled from "styled-components";

const ContainerLoginSignUp = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
        
        * {
            border-radius: 5px;
            font-size: 20px;
        }

        input {
            width: 303px;
            height: 45px;

            border: 1px solid #D5D5D5;
            text-indent: 11px;
            ${({isDisabled}) => isDisabled && `
                background-color: #F2F2F2;
                color: #AFAFAF;
            `}
            ::placeholder {
                color: #D5D5D5;
            }
        }
        button {
            width: 303px;
            height: 45px;

            display: flex;
            justify-content: center;
            align-items: center;

            color: #FFF;
            background-color: #52B6FF;
            ${({isDisabled}) => isDisabled && 'opacity: 0.7'}
        }
    }
    a {
        font-size: 13.976px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;

export default ContainerLoginSignUp;