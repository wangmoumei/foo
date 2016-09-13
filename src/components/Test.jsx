import React from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { Alert } from 'antd';

const Test = ({ location }) => {
  return (
    <MainLayout>
      <Alert message="成功提示的文案" type="success" />
    </MainLayout>

  );
};

export default Test;