import styled from "styled-components";

const LoginForm = () => {
    return (
        <Container>
            <form onSubmit={login}>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
                <button>Entrar</button>
            </form>
        </Container>
    )
};

const login = () => {
    alert()
}

const Container = styled.div`
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

            ::placeholder {
                color: #D5D5D5;
            }
        }

        button {
            color: #FFF;
            background-color: #52B6FF;
        }
    }
`;

export default LoginForm;