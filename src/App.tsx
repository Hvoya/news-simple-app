import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import {connect} from 'react-redux';
import useStyles from './App.styles';
import Drawer from './components/Drawer';
import TopBar from './components/TopBar';
import Routes from './routes';
import { IHeader, IStore } from './store/types';

interface IAppProps {
  header: IHeader;
}

const App: React.FC<IAppProps> = (props) => {
  const classes = useStyles();
  const { header } = props;

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

export default connect(
  (store: IStore) => ({header: store.header}),
)(App);
