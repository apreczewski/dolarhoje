import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dolar from '../pages/Dollar';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dolar} />
      <Route path="/dollar" exact component={Dolar} />
      <Route path="/euro" exact component={Dolar} />
      <Route path="/gold" exact component={Dolar} />
      <Route path="/bitcoin" exact component={Dolar} />
      <Route path="/etheri" exact component={Dolar} />
      <Route path="/bitcoin" exact component={Dolar} />
    </Switch>
  );
};

export default Routes;
