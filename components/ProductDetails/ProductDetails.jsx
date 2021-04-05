import AddToCartButton from '../AddToCartButton/AddToCartButton'
import { Card, CardContent, CardMedia, CardActions } from '@material-ui/core';
import { Typography, createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import useStyles from './styles';

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function ProductDetails({ Product }) {
    const classes = useStyles();

    return (
        <div className={classes.flow}>
            <div className={classes.toolbar} />
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={Product.image}
                    title={Product.name}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography gutterBottom component="h5" variant="h5">
                            {Product.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="textSecondary">
                            {Product.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            &#2547; {Product.price}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <AddToCartButton product={Product} />
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}