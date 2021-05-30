import { useEffect, useReducer } from 'react';
import { useCartContext } from '../../provider/cartProvider';
import { Button, Typography, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import useStyles from './styles';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const reducer = (state, action) => {
    if (action.type === '-' && state.quantity >= 1)
        return { quantity: state.quantity - 1 }
    else if (action.type === '+') {
        return { quantity: state.quantity + 1 }
    }
    else return { quantity: state.quantity }
}

export default function AddToCartButton({ product, key }) {
    const classes = useStyles();
    const { cart, addToCart } = useCartContext()
    let qnty = 0;
    let cartArray = Array.from(cart);
    cartArray.map(item => {
        if (item.id === product.id)
            qnty = item.quantity;
    })
    const [state, dispatch] = useReducer(reducer, { quantity: qnty })

    useEffect(() => {
        if (state.quantity) {
            let alreadyExist = false
            let cartArray = Array.from(cart);
            let newCart = cartArray.map(prod => {
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
            addToCart(cart.filter(prod => { return prod.id !== product.id }))
        }
    }, [state.quantity])


    return (
        <div className={classes.buttons}>
            <Button variant="outlined" color="secondary" onClick={() => dispatch({ type: '-' })}>-</Button>

            <Typography className={classes.quantity}>&nbsp;{state.quantity}&nbsp;</Typography>

            <ThemeProvider theme={theme}>
                <Button variant="outlined" color="primary" onClick={() => dispatch({ type: '+' })}>+</Button>
            </ThemeProvider>
        </div>
    )
}