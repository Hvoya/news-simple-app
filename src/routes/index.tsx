import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import AboutMainPage from '../modules/about/AboutMainPage';
import HelpMainPage from '../modules/help/HelpMainPage';
import NewsMainPage from '../modules/news/NewsMainPage';
import SettingsMainPage from '../modules/settings/SettingsMainPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/news" component={NewsMainPage} />
      <Route path="/settings" component={SettingsMainPage} />
      <Route path="/about" component={AboutMainPage} />
      <Route path="/help" component={HelpMainPage} />
      <Redirect to="/news" />
    </Switch>
  );
};

export default Routes;
