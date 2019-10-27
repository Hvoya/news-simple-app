import { Card, makeStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import styles from './styles';

export const NewsCardSkeleton: React.FC = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.media}>
        <Skeleton className={classes.imageSkeleton} variant="rect" height={210} />
      </div>
      <div className={classes.content}>
        <Skeleton className={classes.headingFirstSkeleton} />
        <Skeleton className={classes.headingSecondSkeleton} />
        <Skeleton className={classes.contentSkeleton} />
        <Skeleton className={classes.contentSkeleton} />
        <Skeleton className={classes.lastContentSkeleton} />
      </div>
    </Card>
  );
};
