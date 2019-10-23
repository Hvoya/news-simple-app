import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setHeader } from '../../../store/actions/header';

const NewsMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader({
      title: 'Новости',
    }));
  }, [dispatch]);

  return (
    <div >

    </div>
  );
};

export default NewsMainPage;
