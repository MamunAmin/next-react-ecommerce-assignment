import { OrderDetails } from '../../components';
import { Grid } from '@material-ui/core';
import { server } from '../config';

export default function orderDetails({ order }) {
    return (
        <main>
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={5} lg={6}>
                    <OrderDetails Order={order} />
                </Grid>
            </Grid>

        </main>
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/orders`)
    const orders = await res.json()

    let order = null;
    orders.map(item => {
        if (item.id.toString() === context.params.id) {
            order = item
        }
    })

    return {
        props: {
            order
        }
    }
}