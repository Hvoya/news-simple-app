import React from 'react';
import {Route, Switch} from 'react-router';

import NewsManiPage from '../modules/news/NewsMainPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="" component={NewsManiPage}/>
    </Switch>
  );
};

export default Routes;
