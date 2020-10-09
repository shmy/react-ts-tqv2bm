import React from 'react';
import {set, get} from 'lodash';
import { Select } from 'antd/es';

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
    schema[2] = label;
    onChanged(schema)
  };
  const handleBackgroundColorChange = (e: any) => {
    console.log(e.target.value)
    setBackgroundColor(e.target.value)
  };
  const handleBackgroundColorBlur = () => {
    set(schema[1], 'style.backgroundColor', backgroundColor);
    onChanged(schema)
  };
  const handleTypeChanged = (value) => {
    setType(value);
    set(schema[1], 'type', value);
    onChanged(schema)
  }
  React.useEffect(() => {
    setLabel(schema[2]);
    setBackgroundColor(get(schema[1], 'style.backgroundColor', '#ffffff'));
    setType(get(schema[1], 'type', 'default'));
  }, [schema]);
  return <div>
    <div>
      <input type="text" value={label} onChange={handleLabelChange} onBlur={handleLabelBlur}/>
      <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} onBlur={handleBackgroundColorBlur}/>
      <Select value={type} style={{width: '100%'}} onChange={handleTypeChanged}>
        <Select.Option value="default">Default</Select.Option>
        <Select.Option value="primary">Primary</Select.Option>
        <Select.Option value="dashed">Dashed</Select.Option>
        <Select.Option value="text">Text</Select.Option>
        <Select.Option value="link">Link</Select.Option>
      </Select>
    </div>
  </div>
};
export default ButtonEditor;
