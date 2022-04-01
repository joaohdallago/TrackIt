import { useContext } from 'react';

import IsDisabledContext from '../../../../../contexts/IsDisabledContext'

const LoginFormInputs = ({ loginData, setLoginData }) => {
    const { isDisable } = useContext(IsDisabledContext)

    const {email, password} = loginData;

    return (
        <>
            <input
                type="email"
                placeholder="email"
                onChange={e => setLoginData({...loginData, email: e.target.value})}
                value={email}
                disabled={isDisable}
                required
            />
            <input
                type="password"
                placeholder="senha"
                onChange={e => setLoginData({...loginData, password: e.target.value})}
                value={password}
                disabled={isDisable}
                required
            />
        </>
    )
}

export default LoginFormInputs;