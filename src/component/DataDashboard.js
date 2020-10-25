import React from 'react';
import { useRecoilValue } from 'recoil';
import { visitsQuery } from '../atoms/visits';
import { VegaLite, VisualizationSpec } from 'react-vega';
import { cloneDeep } from 'lodash';

function DataDashboard() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <VisitsData />
        </React.Suspense>
    );
}

function VisitsData() {
    const visits = useRecoilValue(visitsQuery);
    const spec: VisualizationSpec = {
        data: { name: 'rows' },
        encoding: {
            x: { field: 'date', type: 'ordinal' },
            y: { field: 'views', type: 'quantitative' },
        },
        mark: 'bar',
    };

    return (
        <>
            <div>Data</div>
            <VegaLite spec={spec} data={visits.data} />
        </>
    );
}

export default DataDashboard;
