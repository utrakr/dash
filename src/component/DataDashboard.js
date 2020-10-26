import React from 'react';
import { useRecoilValue } from 'recoil';
import { visitsQuery } from '../atoms/visits';
import { VegaLite, VisualizationSpec } from 'react-vega';

function DataDashboard() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <VisitsData />
        </React.Suspense>
    );
}

function VisitsData() {
    const visits = useRecoilValue(visitsQuery);

    // visits graph information
    const { data, request } = visits;
    const spec: VisualizationSpec = {
        data: { name: 'rows' },
        encoding: {
            x: { field: 'date', type: 'temporal', scale: { domain: [request.toDate, request.fromDate] } },
            y: { field: 'views', type: 'quantitative', aggregate: 'sum' },
        },
        mark: { type: 'bar', tooltip: true },
    };

    return (
        <>
            <div>Data</div>
            <VegaLite spec={spec} data={data} actions={false} />
        </>
    );
}

export default DataDashboard;
