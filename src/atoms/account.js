import { atom, selector } from 'recoil';
import { isEmpty } from 'lodash';

export const accountAtom = atom({
    key: 'account',
    default: {},
});

export const accountState = selector({
    key: 'accountState',
    get: ({ get }) => {
        const user = get(accountAtom);
        if (!isEmpty(user)) {
            const profile = user.getBasicProfile();
            const ret = {
                profile: {
                    name: profile.getName(),
                    email: profile.getEmail(),
                },
                idToken: user.getAuthResponse().id_token,
            };
            console.log('account state', ret);
            return ret;
        } else {
            return {};
        }
    },
});
