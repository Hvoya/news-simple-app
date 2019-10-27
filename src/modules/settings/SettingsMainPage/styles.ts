import { createStyles, Theme } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    heading: {
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 200,
    },
    newsPerPage: {
      minWidth: 270,
    },
    bottomSpacing: {
      marginBottom: theme.spacing(3),
    },
    panelsContainer: {
      maxWidth: '60em',
    },
    fontSettings: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    contentSettings: {
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    fontSettingsFormControl: {
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
      },
    },
    contentSettingsFormControl: {
      [theme.breakpoints.down('sm')]: {
        margin: '0 0 20px 0',
      },
    },
  });
