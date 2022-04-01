import { useContext } from 'react';

import IsDisabledContext from '../../../../../contexts/IsDisabledContext'

const SignUpFormInputs = ({ signUpData, setSignUpData }) => {
    const { isDisabled } = useContext(IsDisabledContext);

    const {email, name, image, password} = signUpData;

    return (
        <>
             <input
                type="email"
                placeholder="email"
                onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                value={email}
                disabled={isDisabled}
                required
            />
            <input
                type="password"
                placeholder="senha"
                onChange={e => setSignUpData({...signUpData, password: e.target.value})}
                value={password}
                disabled={isDisabled}
                required
            />
            <input
                type="text"
                placeholder="nome"
                onChange={e => setSignUpData({...signUpData, name: e.target.value})}
                value={name}
                disabled={isDisabled}
                required
            />
            <input
                type="url"
                placeholder="foto"
                onChange={e => setSignUpData({...signUpData, image: e.target.value})}
                value={image}
                disabled={isDisabled}
                required
            />
        </>
    )
}

export default SignUpFormInputs;