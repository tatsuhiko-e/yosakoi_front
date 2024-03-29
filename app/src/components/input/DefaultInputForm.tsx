import React from 'react'
import { Input } from 'antd';
import styled from 'styled-components'

type InputFromProps = {
  onChange: any,
  children?: string,
  value: string,
  placeholder?: string,
  type?: string
}

const InputFormText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 4px;
`

const AntdInput = styled(Input)`
  height: 42px;
  width: 90%;
  font-size: 18px;
  padding: 4px;
`

export const DefaultInputForm = (props: InputFromProps) => {
  return (
    <>
      <InputFormText>{props.children}</InputFormText>
      <AntdInput type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
    </>
  );
}
