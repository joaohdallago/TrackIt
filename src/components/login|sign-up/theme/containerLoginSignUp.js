import styled from "styled-components";

const ContainerLoginSignUp = styled.div`
    margin-top: 25%;


    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    form {
        display: flex;
        flex-direction: column;
        gap: 6px;

        * {
            width: 303px;
            height: 45px;

            border-radius: 5px;

            font-size: 20px;
        }

        input {
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