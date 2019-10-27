import { createStyles, Theme } from '@material-ui/core/styles';

function styles(theme: Theme) {
  return createStyles({
    card: {
      marginBottom: 20,
    },
    actionArea: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '1em',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    media: {
      width: '370px',
      height: '195px',
      flexShrink: 0,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: 'auto',
      },
    },
    content: {
      padding: '.8em 1em',
    },
    title: {
      fontWeight: 600,
      fontSize: '1.3em',
      marginBottom: '.3em',
    },
    date: {
      fontSize: '1em',
      marginBottom: '1.2em',
    },
    description: {
      fontSize: '1em',
    },
  });
}

export default styles;
