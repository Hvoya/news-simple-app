import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import Drawer from './components/Drawer';
import useStyles from './App.styles';
import Routes from './routes';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar classes={classes}/>
      <Drawer classes={classes}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes/>
      </main>
    </div>
  );
};

export default App;
