const SignUpForm = () => {
    return (
        <form onSubmit={signUp}>
            <input type="email" placeholder="email" required/>
            <input type="password" placeholder="senha" required/>
            <input type="text" placeholder="nome" required/>
            <input type="url" placeholder="foto" required/>
            <button>Cadastrar</button>
        </form>
    )
}

const signUp = () => {
    alert()
}

export default SignUpForm;