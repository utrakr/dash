import { selector } from 'recoil';
import config from '../config';
import { accountState } from './account';
import { DateTime } from 'luxon';

export const visitsQuery = selector({
    dangerouslyAllowMutability: true, // vega https://github.com/facebookexperimental/Recoil/issues/299 https://github.com/vega/vega/issues/2705
    key: 'visitsQuery',
    get: async ({ get }) => {
        const idToken = get(accountState).idToken;
        const toDate = DateTime.utc().startOf('day').plus({ days: 1 });
        const fromDate = toDate.minus({ months: 3 });

        const resp = await fetch(
            `${config.api}/api/views?` +
                new URLSearchParams({
                    fromDate: fromDate.toISO(),
                    toDate: toDate.toISO(),
                }),
            {
                headers: new Headers({
                    Authorization: `Bearer ${idToken}`,
                }),
            }
        );

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
