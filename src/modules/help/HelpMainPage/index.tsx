import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setHeader } from '../../../store/actions/header';

const HelpMainPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeader({
      title: 'Помощь',
    }));
  }, [dispatch]);

  return (
    <div >

    </div>
  );
};

export default HelpMainPage;
