import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    bottomSpacing: {
      marginBottom: theme.spacing(3),
    },
    container: {
      maxWidth: 700,
    },
  });
