import { useState } from 'react';
import './App.css';
import SecretInfo from './scenes/SecretInfo';
import Login from './scenes/Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <>
        {isLoggedIn
            ? <SecretInfo />
            : <Login setIsLoggedIn={setIsLoggedIn} />
        }
    </>
    );
}

export default App;
