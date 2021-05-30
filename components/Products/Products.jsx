import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ Products }) => {
    const classes = useStyles();
    Products = Array.from(Products);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {Products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;