import React from 'react';
import { Button } from 'antd';
import MainLayout from '../layouts/MainLayout/MainLayout';
import styles from './NotFound.less';
import { Link } from 'react-router';


const NotFound = () => {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.desc}>未找到该页面</p>
          <Link to="/"><Button type="primary" style={{ marginTop: 5 }}>返回首页</Button></Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
