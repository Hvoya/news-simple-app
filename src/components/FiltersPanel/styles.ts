import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    panel: {
      maxWidth: '66em',
      marginBottom: '20px',
    },
    content: {
      flexDirection: 'column',
    },
    dateRow: {
      display: 'flex',
      alignItems: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    item: {
      width: 200,
      marginRight: '2em',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    searchItem: {
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
      },
    },
  });
