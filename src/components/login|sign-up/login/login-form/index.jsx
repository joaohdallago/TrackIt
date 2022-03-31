const LoginForm = () => {
    return (
        <form onSubmit={login}>
            <input type="email" placeholder="email" required/>
            <input type="password" placeholder="senha" required/>
            <button>Entrar</button>
        </form>
    )
};

const login = () => {
    alert()
}

export default LoginForm;