import React from 'react';
import './App.css';
import logo from './img/logo_transparent.png';
import GoogleSignIn from './component/GoogleSignIn';
import { useRecoilValue } from 'recoil';
import { accountState } from './atoms/account';
import { isEmpty } from 'lodash';
import DataDashboard from './component/DataDashboard';

function App() {
    const account = useRecoilValue(accountState);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} width={100} alt="logo" /> μtrakr Dashboard
            </header>
            {isEmpty(account) ? <LoggedOutApp /> : <LoggedInApp />}
        </div>
    );
}

function LoggedOutApp() {
    return (
        <>
            <GoogleSignIn />
        </>
    );
}

function LoggedInApp() {
    const account = useRecoilValue(accountState);

    return (
        <>
            <div>Welcome {account.profile.name}!</div>
            <DataDashboard />
        </>
    );
}

export default App;
