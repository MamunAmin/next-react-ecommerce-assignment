import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingBottom: '90%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
