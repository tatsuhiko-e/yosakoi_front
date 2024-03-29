import React from 'react';
import styled from 'styled-components'

type DefaultButtonProps = {
  children: string,
  onClick: any,
  color: string,
  width: string,
  height: string,
  type?: "button" | "submit" | "reset" | undefined
}

export const DefaultButton = (props: DefaultButtonProps) => {

  const StyleButton = styled.button<{color: string, width: string, height: string }>`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 16px auto;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`

  return (
    <StyleButton type={props.type} onClick={props.onClick} color={props.color} width={props.width} height={props.height}>
      {props.children}
    </StyleButton>
  );
}
