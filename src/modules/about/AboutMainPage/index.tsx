import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setHeader } from '../../../store/actions/header';

const AboutMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader({
      title: 'О нас',
    }));
  }, [dispatch]);

  return (
    <div >

    </div>
  );
};

export default AboutMainPage;
