import 'react-circular-progressbar/dist/styles.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Favicon from 'react-favicon';
import GlobalStyle from '../theme/globalStyles';

import Login from './login-sign-up/login';
import SignUp from './login-sign-up/sign-up';
import Today from './main/today'
import Habits from './main/habits';
import History from './main/history';

import UserContext from '../contexts/UserContext'
import IsDisabledContext from '../contexts/IsDisabledContext';
import NewHabitContext from '../contexts/NewHabitContext'

const App = () => {
    const [user, setUser] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const [newHabitData, setNewHabitData] = useState({
        name: '',
        days: []
    });

    return (
        <>
            <GlobalStyle />
            <Favicon url='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c8.svg'/>
            <UserContext.Provider value={{ user, setUser }}>
                <IsDisabledContext.Provider value={{ isDisabled, setIsDisabled }}>
                    <NewHabitContext.Provider value={{ newHabitData, setNewHabitData }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Login />}/>
                                <Route path='/cadastro' element={<SignUp />}/>
                                <Route path='/hoje' element={<Today />} />
                                <Route path='/habitos' element={<Habits />} />
                                <Route path='/historico' element={<History />} />
                            </Routes>
                        </BrowserRouter>
                    </NewHabitContext.Provider>
                </IsDisabledContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default App;