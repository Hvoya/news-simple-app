import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMobileDrawer } from '../../store/actions/mobile_drawer';

interface IContentWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({ className, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMobileDrawer());
  }, []);
  return <div className={className}>{children}</div>;
};

export default ContentWrapper;
