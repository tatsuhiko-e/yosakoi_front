import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

type InputFromProps = {
  onChange: any,
  children: string,
  value: string
}

const { TextArea } = Input;

const InputFormText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 4px;
`

const AntdInput = styled(TextArea)`
  width: 90%;
  font-size: 18px;
  padding: 4px;
`

export const DefaultTextArea = (props: InputFromProps) => {
  return (
    <>
      <InputFormText>{props.children}</InputFormText>
      <AntdInput onChange={props.onChange}  value={props.value} />
    </>
  )
};