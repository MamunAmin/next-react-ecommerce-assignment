import Link from 'next/link';
import { TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function Order({ Orders }) {
  const classes = useStyles();
  let orderArray = Array.from(Orders);

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={5} lg={6}>
        <div className={classes.flow}>
          <div className={classes.toolbar} />

          <Typography className={classes.title} variant="h4" align="center" gutterBottom color="primary">
            Your All Orders are Here!!!
          </Typography>

          <div>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Order ID</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Total Price</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {orderArray.map((item) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                        {item.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.customer.name}</StyledTableCell>
                      <StyledTableCell align="right">{item.totalAmount}</StyledTableCell>
                      <StyledTableCell align="right">
                        <Link href={`/order-details/${item.id}`}><a>
                          <Button variant="outlined" size="small" color="primary" size="large">
                            See Invoice
                          </Button>
                        </a></Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}