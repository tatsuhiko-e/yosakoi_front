import React, { useCallback, useMemo, useState, ReactNode, Fragment } from 'react';
import styled from 'styled-components'
import PageLayout from '../layout/Header';
import { Grid } from '@mui/material';
import { Select } from 'antd';

const DashboardItem = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
`

const ProceedsText = styled.div`
  font-size: 40px;
  text-align: left;
  margin: 0 32px;
`

const Option = Select.Option;

export const DashboardScreen = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  }

  const musics: any[] = [
    "aaaaa",
    "bbbbb"
  ]

  return (
    <>
      <PageLayout>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DashboardItem>
             <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number)=>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
              <ProceedsText>0 JPY</ProceedsText>
            </DashboardItem>
          </Grid>
          <Grid item xs={4}>
            <DashboardItem>
            <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number)=>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
            </DashboardItem>
          </Grid>
          <Grid item xs={4}>
            <DashboardItem>
            <Select defaultValue="全て" size={'large'} style={{ width: 160, margin: "16px" }} onChange={handleChange}>
                {
                  musics.map((option: string, index: number)=>
                    <Option value={option} key={index}>{option}</Option>
                  )
                }
              </Select>
            </DashboardItem>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
}
