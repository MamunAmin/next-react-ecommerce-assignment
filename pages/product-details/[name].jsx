import { ProductDetails } from '../../components';
import { Grid } from '@material-ui/core';
import { server } from '../../config';

export default function productDetails({ product }) {
    return (
        <main>
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={5} lg={6}>
                    <ProductDetails Product={product} />
                </Grid>
            </Grid>

        </main>
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/products`)
    const Products = await res.json()
    let product = null;
    Products.map(item => {
        if (item.name.replace(" ", "") === context.params.name) {
            product = item
        }
    })
    return {
        props: {
            product
        }
    }
}