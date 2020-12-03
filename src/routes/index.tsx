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
      {/* <Route path="/" exact component={Dollar} /> */}
      <Route path="/dollar" component={Dollar} />
      <Route path="/euro" component={Euro} />
      <Route path="/yuan" component={Yuan} />
      <Route path="/libra" component={Libra} />
      <Route path="/iene" component={Iene} />
      <Route path="/gold" component={Gold} />
      <Route path="/bitcoin" component={Bitcoin} />
      <Route path="/ethereum" component={Ethereum} />
    </Switch>
  );
};

export default Routes;
