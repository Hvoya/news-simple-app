import { createStyles } from '@material-ui/core';

export const styles = () =>
  createStyles({
    container: {
      maxWidth: '66em',
      marginBottom: '20px',
      padding: '1em',
    },
    dateRow: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    item: {
      width: 200,
      marginRight: '2em',
    },
  });
