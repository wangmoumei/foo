import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Test from './Test';

const App = ({ location }) => {
  return (
      <Todos location={location} />
  );
};

App.propTypes = {
};

export default App;
