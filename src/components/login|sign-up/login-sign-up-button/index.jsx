import { useContext } from "react";
import IsDisabledContext from "../../../contexts/IsDisabledContext";

import { Rings } from  'react-loader-spinner'


const LoginSignUpButton = ({ text }) => {
    const { isDisabled } = useContext(IsDisabledContext)

    return (
        <button type="submit" disabled={isDisabled}>
            {
                isDisabled ?
                    <Rings
                        height="80"
                        width="80"
                        color='#fff'
                        ariaLabel='loading'
                    />
                :
                    text
            }
        </button>
    )
}


export default LoginSignUpButton;