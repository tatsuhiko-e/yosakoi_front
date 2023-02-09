import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MusicImage = styled.img`
  width: 90%;
  height: auto;
  border: solid;
  border-radius: 100px;
`

const MusicCardContainer = styled.div`
  display: block;
  background-color: #e1e1e1;
  margin: 16px auto;
  width: 96%;
  height: 160px;
  border: 1px dashed #888888;
  text-align: center;
  &:hover{
    background-color: #fcfcfc;
  }
`

const AddIconStyle = styled(AddCircleOutlineIcon)`
  color: #9d9d9d;
  position: relative;
  margin-top: 22px;
`

const AddButtonText = styled.div`
  color: #888888;
  font-size: 16px;
  font-weight: bold;
`

export const MusicAddCard = (props: any) => {

  return (
    <MusicCardContainer onClick={props.onClick}>
        <AddIconStyle sx={{ fontSize: 90 }} />
        <AddButtonText>Add New Music</AddButtonText>
    </MusicCardContainer>
  );
}
