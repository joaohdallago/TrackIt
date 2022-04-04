import { useContext } from "react";
import IsDisabledContext from "../../../contexts/IsDisabledContext";

import { ThreeDots } from  'react-loader-spinner'


const LoginSignUpButton = ({ text }) => {
    const { isDisabled } = useContext(IsDisabledContext)

    return (
        <button type="submit" disabled={isDisabled}>
            {
                isDisabled ?
                    <ThreeDots
                        height="50"
                        width="50"
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