import React, { useCallback, useMemo, useState, ReactNode, Fragment } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import { Col, Row } from 'antd';

export const DashboardScreen = () => {
  return (
    <>
      <PageLayout>
        <Row>
          <Col span={22} offset={1}>
            <div style={{width: "100%", backgroundColor: "#fff"}}>asfaf</div>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}
