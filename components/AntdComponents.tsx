import React from 'react';
import {Button, Select} from 'antd/es';
const AntdComponents = {
  button: Button,
  span: ({children}: {children: any}) => <span>{children}</span>,
  select: Select,
  option: Select.Option,
};
export default AntdComponents;
