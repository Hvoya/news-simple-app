import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { Skeleton } from '@material-ui/lab';

import ContentWrapper from '../../../components/ContentWrapper';
import { setHeader } from '../../../store/actions/header';
import styles from './styles';

const AboutMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHeader({
        title: 'О нас',
      }),
    );
  }, [dispatch]);

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const mapData = {
    center: [48.463138, 135.084107],
    zoom: 15,
  };

  const coordinates = [48.463138, 135.084107];
  return (
    <ContentWrapper className="ymap">
      <Typography className={classes.heading} variant="h2" component="div">
        Мы на картах:
      </Typography>
      <div className={classes.mapContainer}>
        <Skeleton className={classes.mapSkeleton} />
        <div className={classes.mapContent}>
          <YMaps>
            <Map width={'100%'} height={500} defaultState={mapData}>
              <Placemark geometry={coordinates} />
            </Map>
          </YMaps>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AboutMainPage;
