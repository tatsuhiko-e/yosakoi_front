import { Box, Modal, Typography } from '@mui/material';
import styled from 'styled-components'

type DefaultButtonProps = {
  children: string,
  onClick: any,
  color: string,
}

const StyleButton = styled.button<{ color: string }>`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width: 100px;
  height: 36px;
  margin: auto;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`

export const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <></>
  );
}



