import React from 'react';

import { useSelector } from 'react-redux';
import ResponsiveAppBar from '../components/base/AppBar';
import { Box, Button } from '@mui/material';
import ProductTable from '../components/base/ProductTable';

export default function Cart({ data }: any) {
    const { cart, saveForLetter, cartTotal }: any = useSelector(state => state);

    function checkOffer() {
        // show modal and check for discount code and there should be apply button.
    }

    return (<>
        <ResponsiveAppBar />
        <Box style={{ padding: 25 }}>
            <div style={{ margin: "15px 0px" }}>
                Shop More, Save More
                <Button onClick={checkOffer}>Check Offers</Button>
            </div>
            <div>
                <ProductTable title="Shopping Cart" data={cart} columns={[
                    { type: 'image', apiKey: 'thumbnail', id: 1 }
                ]} />
                <Box alignItems="right">
                    <div>Total Price</div>
                    <div>{cartTotal}</div>
                </Box>
            </div>

            <ProductTable title="Your Items" data={saveForLetter} />
        </Box>
    </>)
}