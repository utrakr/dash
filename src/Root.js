import React from 'react';
import {accountAtom} from './atoms/account';
import {
    RecoilRoot,
    useRecoilValue,
} from 'recoil';
import App from "./App";

function Root() {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    );
}

export default Root;
