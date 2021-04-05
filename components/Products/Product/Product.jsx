import Link from 'next/link';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

import { useCartContext } from '../../../provider/cartProvider';
import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === '+')
        return { quantity: state.quantity + 1 }
    else if (action.type === 'current')
        return { quantity: action.quantity }
}

const Product = ({ product }) => {
    const classes = useStyles();

    const { cart, addToCart } = useCartContext();
    const [state, dispatch] = useReducer(reducer, { quantity: 0 });

    useEffect(() => {
        let qty = 0;
        cart.map(prod => {
            if (prod.id === product.id) {
                qty = prod.quantity;
            }
        })
        dispatch({ type: 'current', quantity: qty });
    }, [])

    useEffect(() => {
        if (state.quantity) {
            let alreadyExist = false
            let newCart = cart.map(prod => {
                if (prod.id === product.id) {
                    prod.quantity = state.quantity
                    alreadyExist = true
                }
                return prod
            })

            product = { ...product, quantity: state.quantity }

            if (alreadyExist) addToCart([...newCart])
            else addToCart([...newCart, product])
        }
        else {
            addToCart(cart.filter(item => { return item.id !== product.id }))
        }
    }, [state.quantity])

    return (
        <Card className={classes.root}>
            <Link href={`/product-details/${product.name.replace(" ", "")}`}><a>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
            </a></Link>

            <Link href={`/product-details/${product.name.replace(" ", "")}`}><a>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            &#2547; {product.price}
                        </Typography>
                    </div>
                </CardContent>
            </a></Link>
            
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => dispatch({ type: '+' })}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card >
    );
}
export default Product;