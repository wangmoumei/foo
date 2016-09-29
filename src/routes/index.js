import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Test from '../components/Test';

const Routes = ({ history }) =>
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={App} />
      <Route path="/actived" component={App} />
      <Route path="/completed" component={App} />
      <Route path="/test" component={Test} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
