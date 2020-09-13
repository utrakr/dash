import React from 'react';
import { useSetRecoilState } from 'recoil';
import { accountAtom } from '../atoms/account';

function GoogleSignIn() {
    const setAccount = useSetRecoilState(accountAtom);
    window['onSignIn'] = function (user) {
        setAccount(user);
    };

    return <div className="g-signin2" data-theme="dark" data-width="120" data-onsuccess="onSignIn" />;
}

export default GoogleSignIn;
