import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import NewsMainPage from '../modules/news/NewsMainPage';
import NewsSinglePage from '../modules/news/NewsSinglePage';
import SettingsMainPage from '../modules/settings/SettingsMainPage';
import AboutMainPage from '../modules/about/AboutMainPage';
import HelpMainPage from '../modules/help/HelpMainPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/news" component={NewsMainPage}/>
      <Route path="/news/:id" component={NewsSinglePage}/>
      <Route path="/settings" component={SettingsMainPage}/>
      <Route path="/about" component={AboutMainPage}/>
      <Route path="/help" component={HelpMainPage}/>
      <Redirect to="/news" />
    </Switch>
  );
};

export default Routes;
