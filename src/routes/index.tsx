import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dollar from '../pages/Dollar';
import Euro from '../pages/Euro';
import Yuan from '../pages/Yuan';
import Libra from '../pages/Libra';
import Iene from '../pages/Iene';
import Bitcoin from '../pages/Bitcoin';
import Ethereum from '../pages/Ethereum';
import Gold from '../pages/Gold';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dollar} />
      <Route path="/dollar" exact component={Dollar} />
      <Route path="/euro" exact component={Euro} />
      <Route path="/yuan" exact component={Yuan} />
      <Route path="/libra" exact component={Libra} />
      <Route path="/iene" exact component={Iene} />
      <Route path="/gold" exact component={Bitcoin} />
      <Route path="/bitcoin" exact component={Ethereum} />
      <Route path="/ethereum" exact component={Gold} />
    </Switch>
  );
};

export default Routes;
