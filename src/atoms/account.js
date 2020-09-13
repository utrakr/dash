import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {isEmpty} from 'lodash'

export const accountAtom = atom({
    key: 'account',
    default: {},
});

export const accountState = selector({
    key: 'accountState',
    get: ({get}) => {
        const user = get(accountAtom);
        if (!isEmpty(user)) {
            return {
                "name": user.getBasicProfile().getName(),
                "idToken": user.getAuthResponse().id_token,
            }
        } else {
            return {}
        }
    },
});
