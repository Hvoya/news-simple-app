import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styles from './App.styles';
import Drawer from './components/Drawer';
import TopBar from './components/TopBar';
import Routes from './routes';
import { IStore } from './store/types';

const App: React.FC = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const header = useSelector((store: IStore) => store.header);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar header={header} classes={classes}/>
      <Drawer classes={classes}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes/>
      </main>
    </div>
  );
};

export default App;
