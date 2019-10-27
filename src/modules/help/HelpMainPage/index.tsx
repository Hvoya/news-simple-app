import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContentWrapper from '../../../components/ContentWrapper';
import { setHeader } from '../../../store/actions/header';
import styles from './styles';

const HelpMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHeader({
        title: 'Помощь',
      }),
    );
  }, [dispatch]);

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <ContentWrapper>
      <Typography className={classes.heading} gutterBottom variant="h1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography gutterBottom variant="h2">
        Lorem ipsum dolor.
      </Typography>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti id laboriosam vel. Ad animi at autem
        delectus dignissimos dolorum ducimus excepturi facilis fugiat iste iure iusto laboriosam magni maxime minima nam
        natus nemo, neque nobis nostrum nulla obcaecati optio perferendi quas quia quos repellat rerum sint sunt ullam?
        Accusamus amet eum illum, officia qui quis sapiente Aliquid animi corporis dolore ea eaque eligendi fugit
        necessitatibus, nihil nisi officia quaerat quos, recusandae voluptatibus? Asperiores distinctio doloribus
        expedita explicabo laboriosam, mollitia nihil qui. Cum dolorum harum iste molestias nostrum perferendis
        recusandae voluptas, voluptates. Ab adipisci deleniti eius qui quidem.
      </p>
      <Typography gutterBottom variant="h2">
        Lorem ipsum dolor.
      </Typography>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti id laboriosam vel. Ad animi at autem
        delectus dignissimos dolorum ducimus excepturi facilis fugiat iste iure iusto laboriosam magni maxime minima nam
        natus nemo, neque nobis nostrum nulla obcaecati optio perferendi quas quia quos repellat rerum sint sunt ullam?
        Accusamus amet eum illum, officia qui quis sapiente Aliquid animi corporis dolore ea eaque eligendi fugit
        necessitatibus, nihil nisi officia quaerat quos, recusandae voluptatibus? Asperiores distinctio doloribus
        expedita explicabo laboriosam, mollitia nihil qui. Cum dolorum harum iste molestias nostrum perferendis
        recusandae voluptas, voluptates. Ab adipisci deleniti eius qui quidem.
      </p>
    </ContentWrapper>
  );
};

export default HelpMainPage;
