import React from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components'

type IconButtonProps = {
  children: string,
  onChange: (e :any) => void,
  indeterminate?: boolean,
  checked: boolean
}

const CheckboxText = styled(Checkbox)`
  font-size: 24px;
  font-weight: bold;
  margin-top: 2px;
  size: 39px;
  .ant-checkbox .ant-checkbox-inner {
    width: 26px;
    height: 26px;
    border-color: #008000;
  }
  .ant-checkbox .ant-checkbox-inner::after {
    width: 11px;
    height: 11px;
    border-color: #ffffff;
  }
`

export const TextCheckbox = (props: IconButtonProps) => {
  return (
    <CheckboxText onChange={props.onChange} indeterminate={props.indeterminate} checked={props.checked}>
      {props.children}
    </CheckboxText>
  );
}
