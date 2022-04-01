import { Link } from "react-router-dom"

const LinkToSignUp = () => {
    return (
        <Link to={'/cadastro'}>
            Não tem uma conta? Cadastre-se!
        </Link>
    )
}


export default LinkToSignUp;