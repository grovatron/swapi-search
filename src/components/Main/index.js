import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../../containers/Search';
import Film from '../../containers/Film';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Search} />
    <Route path='/films/:id' component={Film} />
  </Switch>
)

export default Main;
