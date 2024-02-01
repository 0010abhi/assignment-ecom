import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import apiCall from '../../api';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AppModal({ open, handleClose }: {
    open: boolean;
    handleClose: any;
}) {
    const [coupons, setCoupons] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        apiCall('getAvailableCoupons').then((res) => {
            console.log('>>> get available coupons', res);
            setCoupons(res);
        })
    }, []);

    function applyCoupon(coupon: any) {
        console.log('>>> coupon', coupon);
        handleClose();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Available Coupons
                    </Typography>
                    <div>
                        {
                            coupons.map((coupon, index) => {
                                return <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: 2, border: '1px solid black', borderRadius: '5px', padding: '8px' }}>
                                    <div>
                                        <div style={{ marginBottom: '5px' }}>{coupon.couponCode}</div>
                                        <div>{coupon.description}</div>
                                    </div>
                                    <Button onClick={() => applyCoupon(coupon)}>Apply</Button>
                                </div>
                            })
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    );
}