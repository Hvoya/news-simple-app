import { Card, CardActionArea, CardMedia, makeStyles } from '@material-ui/core';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import React from 'react';

import { INews } from '../../store/types';
import styles from './styles';

interface INewsCardProps {
  news: INews;
}

const NewsCard: React.FC<INewsCardProps> = ({ news: { urlToImage, title, publishedAt, description, url } }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => window.open(url)} className={classes.actionArea}>
        <CardMedia className={classes.media} src={urlToImage} component={'img'} title="Live from space album cover" />
        <div className={classes.content}>
          <div className={classes.title}>{title}</div>
          <div className={classes.date}>{format(new Date(publishedAt), 'dd MMMM yyyy', { locale: ru })}</div>
          <p className={classes.description}>{description}</p>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
