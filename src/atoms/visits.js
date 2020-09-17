import { selector } from 'recoil';
import { accountState } from './account';

export const visitsQuery = selector({
    key: 'visitsQuery',
    get: async ({ get }) => {
        const email = get(accountState).profile.email;
        console.log('email', email);
        const resp = await fetch('/api/views?' + new URLSearchParams({ email }));
        if (resp.status === 200) {
            const data = await resp.json();
            console.log('json', data);
            return data;
        } else {
            console.error('unable to lookup');
            return { error: 'unable to lookup' };
        }
    },
});
