import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Favicon from 'react-favicon';
import GlobalStyle from '../theme/globalStyles';

import Login from './login|sign-up/login';
import SignUp from './login|sign-up/sign-up';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Favicon url='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c8.svg'/>
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/cadastro' element={<SignUp />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App