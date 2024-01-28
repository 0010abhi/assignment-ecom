import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../../components/base/AppBar';
import apiCall from '../../api';
import CouponsTable from '../../components/base/CouponsTable';

export default function AdminCoupons() {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiCall('getAvailableCoupons').then((res: any) => {
            setData(res);
        })
    }, []);
    return (<div>
        <ResponsiveAppBar />
        {JSON.stringify(data)}
        <CouponsTable data={data} />
    </div>)
}