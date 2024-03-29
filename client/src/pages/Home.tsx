import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Stack from '@mui/material/Stack';
import ResponsiveAppBar from '../components/base/AppBar';
import apiCall from '../api';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiCall('getAllProducts').then(data => {
            console.log('Data', data);
            setData(data);
        })
    }, []);


    return (<>
        <ResponsiveAppBar />
        <Grid style={{ padding: '25px' }} container spacing={2}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                {
                    data.map((datum: any, index: number) => (
                        <ProductCard key={index} data={datum} />
                    ))
                }
            </Stack>
        </Grid>
    </>)
}