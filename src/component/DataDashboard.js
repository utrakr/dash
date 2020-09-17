import React from 'react';
import { useRecoilValue } from 'recoil';
import { visitsQuery } from '../atoms/visits';

function DataDashboard() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <VisitsData />
        </React.Suspense>
    );
}

function VisitsData() {
    const visits = useRecoilValue(visitsQuery);
    return (
        <>
            <div>Data</div>
            <div>{JSON.stringify(visits)}</div>
        </>
    );
}

export default DataDashboard;
