import Link from 'next/link';
import { useCartContext } from '../../provider/cartProvider';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { Container, Typography, Grid, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const Cart = () => {
    const classes = useStyles();
    const { cart, addToCart } = useCartContext()
    let cartArray = Array.from(cart);

    const removeItem = (product) => {
        let updatedCart = cart.filter(prod => {
            return prod.id !== product.id
        })
        addToCart(updatedCart);
    }

    const totalAmount = () => {
        let ans = 0;
        cartArray.map(prod => {
            ans += (prod.price * prod.quantity);
        })
        return ans;
    }

    const renderEmptyCart = () => (
        <Typography variant="h6" align="center" color="secondary">
            You have no items in your shopping cart!!
            <Typography gutterBottom />
            <Typography gutterBottom />
            <Link href={`/`}>
                <Button variant="outlined" color="primary" size="large">
                    Start Adding Some
            </Button>
            </Link>
        </Typography>

    );
    const renderCart = () => (
        <>
            <Grid container spacing={2}>
                {cartArray.map((cartItem) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="cart-item">
                            <CardMedia image={cartItem.image} alt={cartItem.name} className={classes.media} />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5">{cartItem.name}</Typography>
                                <Typography variant="h5">&#2547; {cartItem.price * cartItem.quantity}</Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <AddToCartButton product={cartItem} key={cartItem.id} />
                                <Button variant="contained" type="button" color="secondary" onClick={() => removeItem(cartItem)}>Remove</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cardDetails}>
                <Typography variant="h4">Total: {totalAmount()}</Typography>
                <div>
                    <Link href={`/checkout`}><a>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </a></Link>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" align="center" gutterBottom color="primary">Your Shopping Cart</Typography>
            { !cart.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};

export default Cart;
