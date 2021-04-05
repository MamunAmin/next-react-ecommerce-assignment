import { Typography, TableCell, Paper, TableHead } from '@material-ui/core';
import { TableContainer, Table, TableBody, TableRow } from '@material-ui/core';
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


export default function OrderDetails({ Order }) {
  const classes = useStyles();

  return (
    <div className={classes.flow}>
      <div className={classes.toolbar} />

      <Typography className={classes.title} variant="h4" align="center" gutterBottom color="primary">
        Invoice for Order ID : {Order.id}
      </Typography>

      <div>
        <TableContainer component={Paper}>
          <Table aria-label="custom pagination table">

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name
                                </TableCell>
                <TableCell style={{ width: 450 }} align="left">
                  {Order.customer.name}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  Address:
                                </TableCell>
                <TableCell style={{ width: 450 }} align="left">
                  {Order.customer.address}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  Mobile:
                                </TableCell>
                <TableCell style={{ width: 450 }} align="left">
                  {Order.customer.cell}
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>

        <Typography className={classes.product} variant="h5" align="center" gutterBottom color="secondary">
          Product Details
                </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Order.products.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.name}</StyledTableCell>
                  <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography className={classes.title} variant="h6" align="center" gutterBottom color="secondary">
          <b>Total Price:</b> {Order.totalAmount}
        </Typography>
      </div>
    </div>
  );
}