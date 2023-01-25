import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 95%;
  height: auto;
  background-color: #ececec;
  display: block;
`

export const ItemListBox = ({children}: any) => {
  return (
    <Box>
      {children}
    </Box>
  );
};