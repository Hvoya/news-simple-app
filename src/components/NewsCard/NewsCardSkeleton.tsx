import { Card } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';

export const NewsCardSkeleton: React.FC = () => {
  return (
    <Card style={{ display: 'flex', width: '66em', marginBottom: 20 }}>
      <div style={{ flexBasis: '40%' }}>
        <Skeleton style={{ width: '100%' }} variant="rect" height={210} />
      </div>
      <div style={{ flexBasis: '60%', padding: '15px' }}>
        <Skeleton style={{ width: '60%' }} />
        <Skeleton style={{ maxWidth: '100%', marginBottom: '50px' }} />
        <Skeleton style={{ width: '100%' }} />
        <Skeleton style={{ width: '100%' }} />
        <Skeleton style={{ width: '100%', marginBottom: 0 }} />
      </div>
    </Card>
  );
};
