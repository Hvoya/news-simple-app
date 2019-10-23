import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface INewsCardProps extends RouteComponentProps {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
}

const NewsCard: React.FC<INewsCardProps> = ({ urlToImage, title, description, history }) => {
  return <Card style={{ marginBottom: 20}}>
    <CardActionArea
      onClick={() => history.push('/news/2')}
      style={{width: '100%', display: 'flex'}}
    >
      <CardMedia
        style={{width: '40%', height: '195px', flexShrink: 0}}
        // className={classes.cover}
        src={urlToImage}
        component={'img'}
        title="Live from space album cover"
      />
      <div style={{padding: 15}}>
        <div>{title}</div>
        <p>
          {description}
        </p>
      </div>
    </CardActionArea>
  </Card>;
};

export default withRouter(NewsCard);
