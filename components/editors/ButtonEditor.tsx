import React from 'react';
import {set, get} from 'lodash';
import { Select, Form, Input } from 'antd/es';

const ButtonEditor: React.FC<{
  schema: any,
  onChanged: (schema: any) => void,
}> = ({schema, onChanged}) => {
  const [label, setLabel] = React.useState('');
  const [backgroundColor, setBackgroundColor] = React.useState<string>('');
  const [type, setType] = React.useState<string>('');
  const handleLabelChange = (e: any) => {
    setLabel(e.target.value)
  };
  const handleLabelBlur = () => {
    schema.children = label;
    onChanged(schema)
  };
  const handleBackgroundColorChange = (e: any) => {
    console.log(e.target.value)
    setBackgroundColor(e.target.value)
  };
  const handleBackgroundColorBlur = () => {
    set(schema.props, 'style.backgroundColor', backgroundColor);
    onChanged(schema)
  };
  const handleTypeChanged = (value) => {
    setType(value);
    set(schema.props, 'type', value);
    onChanged(schema)
  }
  React.useEffect(() => {
    setLabel(schema.children);
    setBackgroundColor(get(schema.props, 'style.backgroundColor', ''));
    setType(get(schema.props, 'type', 'default'));
  }, [schema]);
  return (
    <Form>
      <Form.Item label="文本">
        <Input type="text" value={label} onChange={handleLabelChange} onBlur={handleLabelBlur}/>
      </Form.Item>
      <Form.Item label="背景颜色">
        <Input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} onBlur={handleBackgroundColorBlur}/>
      </Form.Item>
      <Form.Item label="类型">
        <Select value={type} style={{width: '100%'}} onChange={handleTypeChanged}>
          <Select.Option value="default">Default</Select.Option>
          <Select.Option value="primary">Primary</Select.Option>
          <Select.Option value="dashed">Dashed</Select.Option>
          <Select.Option value="text">Text</Select.Option>
          <Select.Option value="link">Link</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
    
};
export default ButtonEditor;
