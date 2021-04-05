import Link from 'next/link';
import Image from 'next/image';
import { useCartContext } from '../../provider/cartProvider';

import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart, ViewList } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useCartContext();

  let cartLnth = 0;
  cart.map(prod => {
    cartLnth += prod.quantity
  })

  return (
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link href={`/`}><a>
            <Typography variant="h6" className={classes.title} color="inherit">
              <Image src="/logo.jpg" alt="LOGO" width="60" height="35" className={classes.image} />
              Livestock Ecommerce
            </Typography>
          </a></Link>

          <div className={classes.grow} />

          <div className={classes.button}>
            <Link href={`/cart`}><a>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={cartLnth} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </a></Link>
          </div>
          
          <div className={classes.button}>
            <Link href={`/order`}><a>
              <IconButton aria-label="Show Order List" color="inherit">
                <ViewList />
              </IconButton>
            </a></Link>
          </div>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;