import useStyles from './styles';
import { Button, TextField, Typography, Container } from '@material-ui/core';
import { useCartContext } from '../../provider/cartProvider';
import { useRouter } from 'next/router';

const Checkout = () => {
    const { cart, addToCart } = useCartContext();
    let cartArray = Array.from(cart);

    const router = useRouter();
    const classes = useStyles();

    const handleSubmit = async event => {
        event.preventDefault()

        let totalAmount = 0
        const orderedProduct = cartArray.map(item => {
            let subTotal = item.price * item.quantity;
            totalAmount += subTotal;
            return { ...item, price: subTotal }
        })

        let customer = {
            name: event.target.name.value,
            address: event.target.address.value,
            cell: event.target.cell.value,
        }

        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                products: orderedProduct,
                customer,
                totalAmount
            })
        }).then(res => {
            addToCart([])
            res.json().then(order => router.push(`/order-details/${order.id}`))
        })
    }

    return (
        <>
            <div className={classes.toolbar} />
            <div>
                <Container>
                    <Typography className={classes.title} variant="h4" align="center" gutterBottom color="primary">
                        Thank you for shopping from us!!!!
                    </Typography>
                </Container>
            </div>
            <div className={classes.root}>
                <form onSubmit={handleSubmit}>
                    <div className={classes.textArea}>
                        <TextField
                            id="outlined-textarea"
                            label="Your Name Here..."
                            placeholder="Only Alphabet"
                            multiline
                            variant="outlined"
                            name="name"
                            style={{ width: 400 }}
                            required
                        />
                    </div>
                    <div className={classes.textArea}>
                        <TextField
                            id="outlined-textarea"
                            label="Your Address..."
                            placeholder="Ex: 1/2, Sector 7, Uttara, Dhaka"
                            multiline
                            variant="outlined"
                            name="address"
                            style={{ width: 400 }}
                            required
                        />
                    </div>
                    <div className={classes.textArea}>
                        <TextField
                            id="outlined-textarea"
                            label="Your Mobile Number..."
                            placeholder="Ex: 01XXXXXXXXX"
                            multiline
                            variant="outlined"
                            name="cell"
                            style={{ width: 400 }}
                            required
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Confirm Order
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Checkout;