import { createStyles, Theme } from '@material-ui/core/styles';

function styles(theme: Theme) {
  return createStyles({
    heading: {
      marginBottom: theme.spacing(2),
    },
    mapContainer: {
      position: 'relative',
    },
    mapSkeleton: {
      width: '100%',
      height: 500,
    },
    mapContent: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 500,
    },
  });
}

export default styles;
