import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '2%',
    },
    checkoutButton: {
        minWidth: '150px',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '3%',
        paddingBottom : 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));
