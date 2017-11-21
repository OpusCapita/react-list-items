import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import ListItemsView from './components/list-items-view/list-items-view.component';
import './app.component.scss';

require('../images/favicon.ico');

render((
  <Router history={hashHistory}>
    <Route path="/" component={ListItemsView} />
  </Router>
), document.getElementById('oc-examples'));
