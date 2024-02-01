
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/actions';

export default function ProductCard({ data }: any) {
    const dispatch = useDispatch();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={data.thumbnail}
                title={data.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => dispatch(addToCart({...data, quantity: 1}))}>Add to Cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}