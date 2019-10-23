import { createStyles, Theme } from '@material-ui/core/styles';

function styles(theme: Theme) {
  return createStyles({
    heading: {
      marginBottom: theme.spacing(2),
    },
  });
}

export default styles;
