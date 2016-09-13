import React, { Component, PropTypes } from 'react';
import Sider from '../Sider/Sider';
import styles from './MainLayout.less';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.head}>
        <h1>Todo App</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.side}>
          <Sider />
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <div className={styles.foot}>
        Built with react, react-router, redux, redux-saga, ant-tool, css-modules, antd...
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
