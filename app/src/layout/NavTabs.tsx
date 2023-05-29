import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Tabs } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import styled from 'styled-components';

export const NavTasbs: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const TabWrapper = styled.div`
    box-shadow: inset 0 -16px 0 0 #000000;
    .ant-tabs {
      width: 95%;
      margin: 0 auto;
      text-align: center;
      font-weight: bold;
      font-size: 40px;
      color: #191919;
      --active-title-color: #ff5959;
    }
    
    .ant-tabs-tab {
      flex: 1;
      height: 80px;
      width: 240px;
      text-align: center;
      font-weight: bold;
      font-size: 40px;
      color: #191919;
      border-width: 10px;
      border-style: solid;
      border-color: #ff6a6a;
    }
    .ant-tabs-tab-btn{
      margin: auto;
      font-weight: bold;
      font-size: 24px;
    }
`;

  return (
    <TabWrapper>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(5).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
          };
        })}
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: "#00ff00;"
        }}
      />
    </TabWrapper>
  );
};