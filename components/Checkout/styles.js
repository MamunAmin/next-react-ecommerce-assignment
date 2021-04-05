import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',

  },
  title: {
    display: 'block',
    width: '100%',
    margin: '3% 0%',
  },
  textArea: {
    margin: '2% 0%',
  },
}));
