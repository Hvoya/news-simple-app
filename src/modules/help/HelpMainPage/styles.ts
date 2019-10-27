import { createStyles, Theme } from '@material-ui/core/styles';

function styles(theme: Theme) {
  return createStyles({
    container: {
      marginBottom: 100,
    },
    heading: {
      marginBottom: theme.spacing(5),
    },
    paragraph: {
      fontSize: '1em',
      lineHeight: '1.5',
      maxWidth: '40em',
      paddingLeft: theme.spacing(2),
      marginBottom: theme.spacing(6),
    },
  });
}

export default styles;
