import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Drawer from './components/Drawer';
import TopBar from './components/TopBar';
import layout from './layout.styles';
import Routes from './routes';
import { IState } from './store/types';

const App: React.FC = () => {
  // Выносим стили в отдельные файл. Нучего им тут делать.
  const useStyles = makeStyles(layout);
  const classes = useStyles();
  const header = useSelector((store: IState) => store.header);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar header={header} classes={classes} />
      <Drawer classes={classes} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
};

export default App;
