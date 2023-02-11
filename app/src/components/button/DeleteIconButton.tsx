import React from 'react';
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';

type IconButtonProps = {
  children: string,
  onClick: any,
  color: any,
}

const IconButtonContainer = styled.button`
  width: 90%;
  height: 90%;
  margin: auto;
  border: 1px solid #a1a1a1;
`

const Icon = styled(DeleteIcon)<{color: string}>`
  background-color: ${(props) => props.color};
  text-align: center;
`

const IconButtonText = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin: auto;
  text-align: center;
`

export const DefaultIconButton = (props: IconButtonProps) => {
  return (
    <IconButtonContainer onClick={props.onClick}>
      <Icon color={props.color} fontSize={"large"} />
      <IconButtonText>{props.children}</IconButtonText>
    </IconButtonContainer>
  );
}
