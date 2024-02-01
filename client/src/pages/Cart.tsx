import React from 'react';

import { useSelector } from 'react-redux';
import ResponsiveAppBar from '../components/base/AppBar';
import { Box, Button } from '@mui/material';
import ProductTable from '../components/base/ProductTable';
import AppModal from '../components/Modals';
import apiCall from '../api';

export default function Cart({ data }: any) {
    const { cart, saveForLetter, cartTotal }: any = useSelector(state => state);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log('>>> coupone data', data);
    // function checkOffer() {
    //     // show modal and check for discount code and there should be apply button.
    // }

    function checkout() {
        apiCall("checkout", "POST", { cart: cart, total: cartTotal }).then((res) => {
            console.log('checkout res', res);
        })
    }

    return (<>
        <ResponsiveAppBar />
        <Box style={{ padding: 25 }}>
            <div style={{ margin: "15px 0px" }}>
                Shop More, Save More
                <Button onClick={handleOpen}>Check Offers</Button>
            </div>
            <div>
                {/* TODO: Pass column and make it reusable by adding more logic related to rendering column type */}
                <ProductTable title="Shopping Cart" data={cart} columns={[
                    { type: 'image', apiKey: 'thumbnail', id: 1 }
                ]} />
                <div style={{ display: 'flex', padding: '15px' }}>
                    <div>
                        <div>Total Price&nbsp;</div>
                        <div style={{ fontWeight: 700 }}>{cartTotal}</div>

                    </div>
                    <div>
                        <div>Discount&nbsp;</div>
                        <div style={{ fontWeight: 700 }}>{cartTotal}</div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Button variant='contained' onClick={checkout}>Checkout</Button>
                </div>
            </div>
            <AppModal open={open} handleClose={handleClose} />
            {/* <ProductTable title="Your Items" data={saveForLetter} /> */}
        </Box>
    </>)
}