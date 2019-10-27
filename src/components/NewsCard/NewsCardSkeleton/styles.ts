import { createStyles, Theme } from '@material-ui/core/styles';

function styles(theme: Theme) {
  return createStyles({
    card: {
      display: 'flex',
      maxWidth: '66em',
      marginBottom: '1em',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    media: {
      flexBasis: '40%',
      [theme.breakpoints.down('xs')]: {
        flexBasis: '100%',
      },
    },
    imageSkeleton: {
      width: '100%',
    },
    content: {
      flexBasis: '60%',
      padding: '15px',
    },
    headingFirstSkeleton: {
      width: '60%',
    },
    headingSecondSkeleton: {
      maxWidth: '100%',
      marginBottom: '50px',
    },
    contentSkeleton: {
      width: '100%',
    },
    lastContentSkeleton: {
      width: '100%',
      marginBottom: 0,
    },
  });
}

export default styles;
